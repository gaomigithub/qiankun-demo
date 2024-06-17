import type { RuntimeOptionsConfig } from '@alilc/lowcode-datasource-types';

import { history } from '@umijs/max';
import { message } from 'antd';
import _ from 'lodash';
import http, { setHttpConfig } from './adaHttp/index';
import {
  baseReqInterceptorFactory,
  baseRespInterceptor,
} from './adaHttp/interceptors';
import {
  PAxiosRequestConfig,
  PAxiosRequestInterceptor,
  PAxiosResponse,
  PAxiosResponseInterceptor,
} from './adaHttp/types';
import { LOGIN_PATH } from './common';

type AsObject = Record<string, any>;

// config 留着扩展
export function createCoreHttpHandler(config?: Record<string, unknown>) {
  return async function (options: RuntimeOptionsConfig) {
    let dataToSend = options.params; // 默认数据为 options.params

    // 如果参数是 FormData 对象，则使用该对象作为请求数据
    if (dataToSend && isFormData(dataToSend)) {
      // 设置请求头，指示使用 FormData 格式
      _.set(options, 'headers.Content-Type', 'multipart/form-data');
    }

    const requestConfig: PAxiosRequestConfig = {
      ...config,
      url: options.uri,
      method: options.method as PAxiosRequestConfig['method'],
      params: options.method === 'get' ? options.params : undefined,
      data: options.method !== 'get' ? options.params : undefined,
      headers: (options.headers as AsObject) ?? {
        'Content-Type': 'application/json',
      },
      formatTransform: false,
      // baseURL: system_config.api
    };
    const response = await http.request(requestConfig);
    return response;
  };
}

const isFormData = (v: Record<string, unknown>) => {
  return Object.prototype.toString.call(v) === '[object FormData]';
};

/**
 * http库基础配置，返回httpHandler
 * @param config
 * @returns
 */
export function createHttpHandler() {
  setHttpConfig({
    requestInterceptors: [baseReqInterceptorFactory(), authRequest],
    responseInterceptors: [authError, baseRespInterceptor],
    onResponseError(response: { data: { errmsg: any } }) {
      message.error(response.data.errmsg || '服务异常');
    },
    onError(error: { message: any }) {
      message.error(error.message || '服务异常');
    },
  });

  return createCoreHttpHandler;
}

const loginPath = LOGIN_PATH;

const authError: PAxiosResponseInterceptor = (response: PAxiosResponse) => {
  if (response.data.errcode === 401) {
    message.error('登录已过期，请重新登录');
    localStorage.removeItem('token');
    history.push(loginPath);
    return new Promise(() => {});
  }

  return response;
};

const authRequest: PAxiosRequestInterceptor = (config) => {
  if (!config.headers) {
    config.headers = {};
  }
  if (localStorage.getItem('token')) {
    config.headers.Authorization =
      'Bearer ' + localStorage.getItem('token') ?? '';
  } else {
    history.push(loginPath);
  }

  return config;
};
export { setHttpConfig };
