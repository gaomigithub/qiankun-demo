/* eslint-disable import/no-named-as-default-member */
import humps from 'humps';
import type { PAxiosRequestConfig, PAxiosRequestConfigForInterceptor, PAxiosResponse, PAxiosResponseInterceptor } from './types';
import { UNIVERSAL_TOKEN } from './constants';
import BizError from './bizError';
import { forceReportError, isFormData, isNumerical, utf8ArrayToStr } from './utils';
import cookies from './utils/cookies';

/**
 * 基础请求拦截器工程：可配置是否驼峰转化、链路id，推荐使用
 * @param formatTransform 是否驼峰转化
 * @returns 请求拦截器
 */
export const baseReqInterceptorFactory =
  (formatTransform = false) =>
  (config: PAxiosRequestConfig) => {
    const needFormatTransform = config.formatTransform ?? formatTransform;
    // 请求体属性转为snake_case
    config.formatTransform = needFormatTransform;
    if (needFormatTransform && config.params) {
      config.params = humps.decamelizeKeys(config.params);
    }

    if (needFormatTransform && config.data && !isFormData(config.data) /* 防止上传被decamelize */) {
      config.data = humps.decamelizeKeys(config.data);
    }
    return config;
  };
/**
 * 将响应体的属性转为驼峰
 * @param data
 * @returns
 */
const dataFormatTransform = (data: any) =>
  humps.camelizeKeys(data, {
    process: key => {
      if (isNumerical(key)) {
        return key;
      }
      key = key.replace(
        /* 从源码拷贝, 从正则中去掉了`-`,防止出现`a-b`会被转成`aB`的情况 */
        /[_\s]+(.)?/g,
        (_, chr) => (chr ? chr.toUpperCase() : '')
      );
      // Ensure 1st char is always lowercase
      return key.substr(0, 1).toLowerCase() + key.substr(1);
    },
  });
export const baseRespInterceptor = (response: PAxiosResponse) => {
  const { formatTransform } = response.config;
  if (response.config.responseType === 'arraybuffer') {
    // 响应类型为 arraybuffer 的请求的情况
    if (response.headers['content-type'] && response.headers['content-type'].includes('json')) {
      // 响应是 json 类型，则响应出错
      const str = utf8ArrayToStr(new Uint8Array(response.data));
      try {
        response.data = JSON.parse(str);
      } catch (err) {
        response.data = null;
      }
    } else {
      return response;
    }
  }
  // 响应体体属性转为camelCase
  if (formatTransform && response?.data) {
    response.data = dataFormatTransform(response.data);
  }
  return response;
};

interface BaseRespInterceptorFactoryConfig {
  isRequestSuccess?: (response: PAxiosResponse) => boolean;
}

function defaultRequestSuccess(response: PAxiosResponse) {
  return response?.data?.errcode === 0;
}

/**
 * 基础响应拦截器，推荐使用，可以自定义请求是否成功
 * @param response 响应体
 * @returns 响应体
 */
export const emsBaseRespInterceptorFactory =
  (config: BaseRespInterceptorFactoryConfig = {}) =>
  (response: PAxiosResponse) => {
    const { formatTransform } = response.config;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const globalHttpConfig = response.config.globalHttpConfig!;
    if (response.config.responseType === 'arraybuffer') {
      // 响应类型为 arraybuffer 的请求的情况
      if (response.headers['content-type'] && response.headers['content-type'].includes('json')) {
        // 响应是 json 类型，则响应出错
        const str = utf8ArrayToStr(new Uint8Array(response.data));
        try {
          response.data = JSON.parse(str);
        } catch (err) {
          response.data = null;
        }
      } else {
        return response;
      }
    }
    // 响应体体属性转为camelCase
    if (formatTransform && response?.data) {
      response.data = dataFormatTransform(response.data);
    }
    const isRequestSuccess = config.isRequestSuccess ?? defaultRequestSuccess;
    // 支持自定义判断请求是否成功
    if (!isRequestSuccess(response)) {
      const bizError = new BizError(response);
      // 自定义业务错误处理
      if (response.config.onResponseError) {
        // 防止开发者临时地配置空的onResponseError, 导致异常被吞掉. 因此在此强制抛出.
        const forceReportErrorConf = response.config.forceReportError ?? globalHttpConfig.forceReportError;
        let customErrorRes: Promise<any> | void;
        try {
          customErrorRes = response.config.onResponseError(response);
        } catch (e) {
          forceReportError(e, forceReportErrorConf);
          throw e;
        }
        forceReportError(bizError, forceReportErrorConf);
        if (customErrorRes?.then) {
          return customErrorRes.then(
            () => response,
            (error: any) => {
              forceReportError(error, forceReportErrorConf);
              throw error;
            }
          );
        }
      } else if (globalHttpConfig.onResponseError) {
        // 开发者配置的全局onResponseError没有能力吃掉异常. 不必强制抛出. 交给request的catch回调处理.
        globalHttpConfig.onResponseError(bizError);
        return Promise.reject(bizError);
      } else {
        return Promise.reject(bizError);
      }
    }
    return response;
  };

/**
 * 基础响应拦截器，推荐使用
 * @param response 响应体
 * @returns 响应体
 */
export const emsBaseRespInterceptor = emsBaseRespInterceptorFactory({
  isRequestSuccess: defaultRequestSuccess,
});

/**
 * 拦截器工厂：根据key
 * @scope browser
 * @param key X-Access-Token
 * @param useUniversalToken  是否使用通用token，仅非正式环境可用，默认不使用
 * @returns 认证请求拦截器
 */
export const authorizationFactory =
  (key = 'X-Access-Token', useUniversalToken = false) =>
  (config: PAxiosRequestConfigForInterceptor) => {
    if (useUniversalToken) {
      config.headers[key] = UNIVERSAL_TOKEN;
    } else if (cookies.get(key)) {
      config.headers[key] = cookies.get(key);
    }
    return config;
  };

/**
 * 请求拦截器：请求头部增加用户id(pp-userid)
 * 依赖：cookie存有user对象
 * @scope browser
 * @param config 请求配置
 */
export const userIdInterceptor = (config: PAxiosRequestConfigForInterceptor) => {
  const userStr = cookies.get('user');
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      config.headers['pp-userid'] = user.id;
    } catch (error) {
      console.error('user cookie parse error', error);
    }
  }
  return config;
};

/**
 * 请求拦截器：请求头部增加门店id(pp_storeid)
 * 依赖：cookie存有storeId
 * @scope browser
 * @param config 请求配置
 */
export const storeIdInterceptor = (config: PAxiosRequestConfigForInterceptor) => {
  const storeId = cookies.get('storeId');
  if (storeId) {
    config.headers.pp_storeid = storeId;
  }
  return config;
};

/**
 * 响应拦截器工厂：认证错误处理
 * @scope browser
 * @param redirectUrl 重定向地址，默认为/login?from=[跳转前地址]
 * @returns 认证错误响应拦截器数组（响应拦截和错误拦截）
 */
export const emsAuthErrorRespInterceptorFactory = (redirectUrl?: string) =>
  [
    response => {
      const errCode = response?.data?.errcode;
      if (errCode === 403 || errCode === 601 || (errCode > 200000 && errCode < 300000)) {
        cookies.clear();
        const url = redirectUrl || `/login?from=${encodeURIComponent(window.location.pathname + window.location.search)}`;
        window.location.href = url;
        return new Promise(() => {
          // 正在重定向,返回一个总是pending的Promise
        });
      }
      return response;
    },
    (err: any) => {
      const errCode = err?.data?.errcode; // err可能是response
      if (errCode === 403 || errCode === 601 || (errCode > 200000 && errCode < 300000)) {
        cookies.clear();
        const url = redirectUrl || `/login?from=${encodeURIComponent(window.location.pathname + window.location.search)}`;
        window.location.href = url;
        return new Promise(() => {
          // 正在重定向,返回一个总是pending的Promise
        });
      }
      return Promise.reject(err);
    },
  ] as PAxiosResponseInterceptor;
