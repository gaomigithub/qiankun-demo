import md5 from 'blueimp-md5';
import { DEFAULT_DEDUPE } from './constants';
import type { PAxiosRequestConfig } from './types';

class DedupeManager {
  private requestRecords: Record<
    string,
    {
      /**
       * 请求的uid
       */
      reqUID: string;
      /**
       * 请求的Promise
       * */
      reqPromise: Promise<any>;
      /**
       * 这条记录什么时候过期
       * */
      expireTimestamp: number;

      // #region 方便调试
      method?: string;
      url?: string;
      // #endregion
    }
  >;

  constructor() {
    this.requestRecords = {};
  }

  public handler(config: PAxiosRequestConfig) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dedupe = config.dedupe ?? config.globalHttpConfig!.dedupe;
    if (!dedupe) {
      return;
    }
    const requestUID = this.generateRequestUID(config);
    if (!requestUID) {
      return;
    }

    const delay = dedupe === true ? DEFAULT_DEDUPE.delay : dedupe.delay;

    const reqRecord = this.requestRecords[requestUID];

    // #region 临时代码,防止未知异常,导致requestRecords持续膨胀,内存泄露
    if (Object.keys(this.requestRecords).length > 200) {
      this.requestRecords = {};
      // eslint-disable-next-line no-console
      console.error('requestRecords size. 短时间内请求次数超过200');
    }
    // #endregion

    if (!reqRecord || Date.now() > reqRecord.expireTimestamp) {
      // 没有请求记录,或记录过期,则认为是非重复请求
      this.removeExpiredRecord();
    } else {
      this.removeExpiredRecord();
      reqRecord.expireTimestamp = Date.now() + delay; // 防抖,更新记录过期时间
      // @ts-ignore
      reqRecord.reqPromise.__count = (reqRecord.reqPromise.__count || 0) + 1;
      // @ts-ignore
      if (reqRecord.reqPromise.__count === 50) {
        const url = `${config.baseURL ?? ''}${config.url}`;
        setTimeout(() => {
          const err = new Error(`防抖次数超过50次, url: ${url}`);
          err.name = 'DedupeRequestError';
          throw err;
        }, 1);
      }
      return reqRecord.reqPromise;
    }
  }

  /**
   * 记录发出的请求
   * @param config
   * @param reqPromise
   */
  public recordResponse(config: PAxiosRequestConfig, reqPromise: Promise<any>) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dedupe = config.dedupe ?? config.globalHttpConfig!.dedupe;
    if (!dedupe) {
      return;
    }
    const reqUID = this.generateRequestUID(config);
    if (!reqUID) {
      return;
    }

    const delay = dedupe === true ? DEFAULT_DEDUPE.delay : dedupe.delay;
    this.requestRecords[reqUID] = {
      reqUID,
      reqPromise,
      expireTimestamp: Date.now() + delay,
      method: config.method,
      url: config.url,
    };
  }

  /**
   * 清除记录
   * 仅用于单测
   */
  public clearRecords() {
    this.requestRecords = {};
  }

  private generateRequestUID(config: PAxiosRequestConfig) {
    const method = config.method || '';
    const reqUrl = `${config.baseURL ?? ''}${config.url}`;
    const reqParams = config.params;
    const reqData = config.data;
    try {
      return md5(method + reqUrl + JSON.stringify(reqParams) + JSON.stringify(reqData));
    } catch (e) {
      console.warn('[@icode/http/dedupe] 生成请求id失败', e);
      return null;
    }
  }

  /**
   * 移除过期的记录
   * @param delay
   */
  private removeExpiredRecord() {
    Object.keys(this.requestRecords).forEach(key => {
      if (Date.now() > this.requestRecords[key].expireTimestamp) {
        delete this.requestRecords[key];
      }
    });
  }
}

export default DedupeManager;
