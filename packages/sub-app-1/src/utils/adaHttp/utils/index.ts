import { PHttpConfig } from '../types';

export const isNumerical = function (obj: any) {
  obj = obj - 0;
  return obj === obj;
};

export const isFormData = (val: any) => {
  return typeof FormData !== 'undefined' && val instanceof FormData;
};
export const isDownloadResponseType = (type?: string) => {
  return type === 'blob' || type === 'arraybuffer';
};

export const markReported = (err: any) => {
  if (!err) return;
  err._reported = true;
  err.apmIgnore = true;
  return err;
};

export const hasReported = (err: any) => {
  return err?._reported === true;
};

const cloneError = (err: any) => {
  if (!err) return err;
  const newError = new Error(`[RethrowByicodeHttp]${err.message ?? ''}`);
  if (err.stack) {
    newError.stack = err.stack;
  }
  if (err.name) {
    newError.name = err.name;
  }
  // Node.js specific (system errors)...
  if (err.code) {
    // @ts-ignore
    newError.code = err.code;
  }
  if (err.errno) {
    // @ts-ignore
    newError.errno = err.errno;
  }
  if (err.syscall) {
    // @ts-ignore
    newError.syscall = err.syscall;
  }
  for (const key in err) {
    if (Object.prototype.hasOwnProperty.call(err, key)) {
      const element = err[key];
      // @ts-ignore
      newError[key] = element;
    }
  }
  return newError;
};

export const forceReportError = (err: any, strategy: PHttpConfig['forceReportError']) => {
  if (!strategy || hasReported(err)) {
    return;
  }
  const clonedError = cloneError(err);
  if (strategy === 'throwToGlobal') {
    setTimeout(() => {
      throw clonedError;
    });
    markReported(err);
  }
  if (typeof strategy === 'function') {
    try {
      strategy(clonedError);
      markReported(err);
    } catch (error) {
      console.error('自定义的forceReportError出错了', error);
    }
  }
};

/**
 * 是否为对象类型
 * @param val
 */
export function isObject(val: any): val is Record<string, any> {
  return toString.call(val) === '[object Object]';
}
/* istanbul ignore next */
export function deepMerge(...objs: Record<string, any>[]): Record<string, any> {
  const result = Object.create(null);
  objs.forEach(obj => {
    // 过滤掉非对象参数
    if (obj && isObject(obj)) {
      Object.keys(obj).forEach(key => {
        const val = obj[key];
        if (isObject(val)) {
          if (isObject(result[key])) {
            result[key] = deepMerge(result[key], val);
          } else {
            result[key] = deepMerge(val);
          }
        } else {
          result[key] = val;
        }
      });
    }
  });
  return result;
}
/* istanbul ignore next */
export function utf8ArrayToStr(array: Uint8Array) {
  let out = '',
    i = 0,
    c;
  let char2, char3;
  while (i < array.length) {
    c = array[i++];
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0));
        break;
    }
  }
  return out;
}
