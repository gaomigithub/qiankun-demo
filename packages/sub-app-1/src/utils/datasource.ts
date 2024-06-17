

import { message } from 'antd';
import { PAxiosResponse, baseReqInterceptorFactory, baseRespInterceptor } from './adaHttp/index';
import {createHttpHandler} from './http'

const silenceErrCodeItem: number[] = []; // 需要特殊处理的错误码，全局错误提示静默
const defaultFormatTransform = true; // 是否默认转驼峰

export function handleResponseError(response: PAxiosResponse) {
  if (silenceErrCodeItem.includes(response.data.errcode)) {
    return;
  }
  if (response.data.errmsg) {
    message.error(response.data.errmsg);
  }
}

export const httpHandler = createHttpHandler();

