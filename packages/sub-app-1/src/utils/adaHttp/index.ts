import { createICodeHttp } from './request';

const { axiosInstance, request, get, post, put, del, setHttpConfig, setRequestInterceptors, setResponseInterceptors, clearInterceptors } =
createICodeHttp();
export {
  get,
  post,
  put,
  del,
  request,
  axiosInstance,
  setHttpConfig,
  setRequestInterceptors,
  setResponseInterceptors,
  clearInterceptors,
  createICodeHttp,
};
export default {
  request,
  get,
  post,
  put,
  del,
};

export * from './interceptors';
export type { PHttpConfig, PAxiosRequestConfig, PAxiosResponse, CommonResponse, ListResponse, ListRequestParam, Pager } from './types';
