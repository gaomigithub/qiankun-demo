
import { baseReqInterceptorFactory, baseRespInterceptor, setHttpConfig } from '@/utils/adaHttp';
import { PAxiosRequestInterceptor, PAxiosResponse, PAxiosResponseInterceptor } from '@/utils/adaHttp/types';
import { message } from 'antd';

function setupHttp() {
  const authError: PAxiosResponseInterceptor = (response: PAxiosResponse) => {
    
    if (response.data.code === 401) {
      message.error('登录已过期，请重新登录');
      return new Promise(() => {});
    }
    if (response.status !== 200) {
      message.error(response.data.errmsg || '服务异常');
    }
    return response;
  };

  const authRequest: PAxiosRequestInterceptor = (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    if (localStorage.getItem('token')) {
      config.headers['X-Access-Token'] = localStorage.getItem('token') ?? '';
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
}

export default setupHttp;
