/* eslint-disable @typescript-eslint/no-shadow */
import type { Axios } from 'axios';
import axios from 'axios';
import { DEFAULT_TIMEOUT, DEFAULT_HTTP_CONFIG } from './constants';
import DedupeManager from './dedupe';
import type { PAxiosRequestConfig, PAxiosRequestInterceptor, PAxiosResponse, PAxiosResponseInterceptor, PHttpConfig } from './types';
import { isFormData, isDownloadResponseType, forceReportError, deepMerge } from './utils';

export function createICodeHttp(config?: PHttpConfig) {
  const dedupeManager = new DedupeManager();
  let httpConfig: PHttpConfig = deepMerge({}, DEFAULT_HTTP_CONFIG, config || {});
  let axiosInstance: Axios;
  setHttpConfig(httpConfig);

  /**
   * 封装简单请求
   * @param {IAxiosRequestConfig} config
   */
  function request<T = any>(config: PAxiosRequestConfig): Promise<PAxiosResponse<T>> {
    const onError = config.onError ?? httpConfig.onError;
    const dedupe = config.dedupe ?? httpConfig.dedupe;
    const timeoutIsConfigured = 'timeout' in config || 'timeout' in (httpConfig.axiosRequestConfig || {});
    // 保证headers非空，减少后面的判空处理
    config.headers = config.headers ?? {};
    // 给拦截器用
    config.globalHttpConfig = httpConfig;

    // 没有显式设置超时且非上传下载, 默认超时为10s
    if (!timeoutIsConfigured && !isFormData(config.data) && !isDownloadResponseType(config.responseType)) {
      config.timeout = DEFAULT_TIMEOUT;
      config.transitional = deepMerge(config.transitional || {}, {
        clarifyTimeoutError: true,
      }) as typeof config.transitional;
    }
    if (dedupe) {
      const res = dedupeManager.handler(config);
      if (res) {
        return res;
      }
    }

    const reqPromise = axiosInstance.request(config).catch(err => {
      if (axios.isAxiosError(err)) {
        if (err.message.includes('timeout of ')) {
          err.message += ` ${err.config?.url}`;
          err.name = 'TimeoutError';
        }
        onError && onError(err);
      }
      forceReportError(err, config.forceReportError ?? httpConfig.forceReportError);
      throw err;
    });
    if (dedupe) {
      dedupeManager.recordResponse(config, reqPromise);
    }
    return reqPromise;
  }

  /**
   * GET
   * @param url URL
   * @param config 请求配置项
   */
  function get<T = any>(url: string, config?: PAxiosRequestConfig): Promise<PAxiosResponse<T>> {
    return request({
      url: wrapQuery(url), // 使用 wrapQuery 函数处理 URL
      method: 'get',
      ...config,
    });
  }

  function wrapQuery(url: string) {
    // 获取当前时间戳并转换为字符串
    const timestamp = Date.now().toString();
    // 请求来源
    const source = 'weixin_app';
    // 构造查询参数对象
    const queryParams = {
      t: timestamp,
      _source: source,
    };
    // 将查询参数添加到 URL 上
    const updatedURL = addQueryParamsToURL(url, queryParams);
    return updatedURL;
  };

  // 辅助函数：将查询参数添加到 URL 上
function addQueryParamsToURL(url: string, queryParams: { [key: string]: string }): string {
  // 将查询参数对象转换为字符串形式
  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');

  // 检查原始 URL 是否已包含查询字符串
  const separator = url.includes('?') ? '&' : '?';

  // 将查询参数追加到 URL
  return `${url}${separator}${queryString}`;
}

  /**
   * POST
   * @param url URL
   * @param data 请求体数据
   * @param config 请求配置项
   */
  function post<T = any>(url: string, data?: any, config?: PAxiosRequestConfig): Promise<PAxiosResponse<T>> {
    return request({
      url:wrapQuery(url),
      method: 'post',
      data,
      ...config,
    });
  }

  /**
   * PUT
   * @param url URL
   * @param data 请求体数据
   * @param config 请求配置项
   */
  function put<T = any>(url: string, data?: any, config?: PAxiosRequestConfig): Promise<PAxiosResponse<T>> {
    return request({
      url,
      method: 'put',
      data,
      ...config,
    });
  }

  /**
   * DELETE
   * @param url URL
   * @param config 请求配置项
   */
  function del<T = any>(url: string, config?: PAxiosRequestConfig): Promise<PAxiosResponse<T>> {
    return request({
      url,
      method: 'delete',
      ...config,
    });
  }

  /**
   * 设置http配置
   * @param config
   * @description 该方法会重新实例化axios
   * @public
   */
  function setHttpConfig(config: PHttpConfig) {
    httpConfig = deepMerge({}, DEFAULT_HTTP_CONFIG, config);
    const axiosConfig = httpConfig.axiosRequestConfig;
    axiosInstance = axios.create(axiosConfig); // ! 重新实例化axios, request是会变化的
    if (httpConfig?.requestInterceptors?.length) {
      setRequestInterceptors(httpConfig.requestInterceptors);
    }
    if (httpConfig?.responseInterceptors?.length) {
      setResponseInterceptors(httpConfig.responseInterceptors);
    }
  }

  /**
   * 设置请求拦截器组，执行顺序与数组顺序相同
   * @param interceptors 成功请求拦截器数组
   * @public
   */
  function setRequestInterceptors(interceptors: PAxiosRequestInterceptor[]) {
    if (Array.isArray(interceptors)) {
      clearRequestInterceptors();
      for (let i = interceptors.length - 1; i >= 0; i--) {
        const interceptor = interceptors[i];
        if (Array.isArray(interceptor)) {
          axiosInstance.interceptors.request.use(...(interceptor as Parameters<typeof axiosInstance.interceptors.request.use>));
        } else {
          axiosInstance.interceptors.request.use(interceptor as Parameters<typeof axiosInstance.interceptors.request.use>[0]);
        }
      }
    }
  }

  /**
   * 设置响应拦截器组，执行顺序与数组顺序相同
   * @param interceptors 成功响应拦截器数组
   * @public
   */
  function setResponseInterceptors(interceptors: PAxiosResponseInterceptor[]) {
    if (Array.isArray(interceptors)) {
      clearResponseInterceptors();
      for (const interceptor of interceptors) {
        if (Array.isArray(interceptor)) {
          axiosInstance.interceptors.response.use(...interceptor);
        } else {
          axiosInstance.interceptors.response.use(interceptor);
        }
      }
    }
  }

  /**
   * 清空拦截器
   * @public
   */
  function clearInterceptors() {
    // 修改了axios内部变量, 该清理操作等效于在axios 1.0.0中的interceptors.request.handlers.clear()
    clearRequestInterceptors();
    clearResponseInterceptors();
  }

  function clearRequestInterceptors() {
    const { interceptors } = axiosInstance;
    // @ts-ignore
    if (interceptors.request.handlers) {
      // @ts-ignore
      interceptors.request.handlers = [];
    }
  }
  function clearResponseInterceptors() {
    const { interceptors } = axiosInstance;
    // @ts-ignore
    if (interceptors.response.handlers) {
      // @ts-ignore
      interceptors.response.handlers = [];
    }
  }

  return {
    request,
    get,
    post,
    del,
    put,
    setHttpConfig,
    axiosInstance: axiosInstance!,
    setRequestInterceptors,
    setResponseInterceptors,
    clearInterceptors,
    __forTest__: {
      dedupeManager,
    },
  };
}
