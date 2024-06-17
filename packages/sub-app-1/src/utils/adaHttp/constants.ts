import { stringify } from 'qs';
import type { DedupeConfig, PAxiosResponse, PHttpConfig } from './types';
/** 默认通用token，仅非生产环境可用 */
export const UNIVERSAL_TOKEN = "";
export const DEFAULT_DEDUPE: DedupeConfig = {
  delay: 500,
};
export const DEFAULT_TIMEOUT = 30_000;
/** http配置项 */
export const DEFAULT_HTTP_CONFIG: PHttpConfig = {
  axiosRequestConfig: {
    paramsSerializer(params) {
      return stringify(params, { indices: false });
    },
  },
  dedupe: true,
  onError: e => {
    console.error('网络不给力，请稍后重试！', e);
  },
  onResponseError: (response: PAxiosResponse) => {
    console.error(response?.data?.errmsg);
  },
  // forceReportError: 'throwToGlobal',
};
