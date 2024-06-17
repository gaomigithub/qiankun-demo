
import { message } from 'antd';
import { PAxiosRequestInterceptor, PAxiosResponse, PAxiosResponseInterceptor } from './adaHttp/types';
import { baseReqInterceptorFactory, baseRespInterceptor, setHttpConfig } from './adaHttp';


const authError: PAxiosResponseInterceptor = (response: PAxiosResponse) => {
  console.debug('登陆过期', response);
  
  if (response.data.errcode === 401) {
    
    message.error('登录已过期，请重新登录');
    return new Promise(() => {});
  }
  if (response.data.errcode !== 0) {
    // message.error(response.data.errmsg );
  }
  return response;
};

const authRequest: PAxiosRequestInterceptor = (config) => {
  if (!config.headers) {
    config.headers = {};
  }


  if (localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token') ?? '';
  }

  return config;
};

setHttpConfig({
  requestInterceptors: [baseReqInterceptorFactory(), authRequest],
  responseInterceptors: [authError, baseRespInterceptor],
  onResponseError(response) {
    message.error(response.data.errmsg || '服务异常');
  },
  onError(error) {
    message.error(error.message || '服务异常');
  },
});
