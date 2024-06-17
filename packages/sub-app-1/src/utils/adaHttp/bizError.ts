import type { AxiosResponse } from 'axios';
import type { CommonResponse, PAxiosRequestConfig, PAxiosResponse } from './types';

export default class BizError<T extends CommonResponse<any>> extends Error implements PAxiosResponse<T> {
  config: PAxiosRequestConfig;

  data: T;

  status: number;

  statusText: string;

  headers: any;

  request?: any;

  /**
   * 是否要被APM忽略
   */
  apmIgnore: boolean;

  constructor(response: AxiosResponse<T>) {
    super(response.data?.errmsg ?? '未知的业务错误');
    this.name = 'BizError';
    this.config = response.config;
    this.data = response.data;
    this.status = response.status;
    this.statusText = response.statusText;
    this.headers = response.headers;
    this.request = response.request;
    this.apmIgnore = false;
  }
}
