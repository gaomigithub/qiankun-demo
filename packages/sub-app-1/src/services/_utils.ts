import type { PAxiosResponse } from '@/utils/adaHttp/index';
import { message } from 'antd';
import { get as _get } from 'lodash';
import service from '../config';

export const { api, login_api } = service;


export interface CommonResponse<T> {
  status: number;
  success: string | boolean;
  result: T;
  message: string;
  timestamp: string;
  request_id: string;
}

// export interface IListCommonResponse<T> {
//   status: number;
//   result: T;
//   message: string;
// }

export type ListCommonResponse<T> = CommonResponse<T> & {
  pager: any;
  count: number;
};

/**
 * 处理网络请求返回数据(返回array类型数据)
 */
export const processResult = <T extends ArrayLike<T[number]>>(
  result: PAxiosResponse<CommonResponse<T>> | null,
  defaultValue = [],
): T => {
  if (_get(result, 'data.status') === 200 && _get(result, 'data.result')) {
    //@ts-ignore
    return _get(result, 'data.result', defaultValue);
  }
  return defaultValue as unknown as T;
};
/**
 * 处理网络请求返回数据(返回obj类型数据)
 */
export const objectResult = <T>(
  result?: PAxiosResponse<CommonResponse<T>> | null,
  defaultValue = {},
): T => {
  if (_get(result, 'data.status') !== 0 && _get(result, 'data.result')) {
    //@ts-ignore
    return _get(result, 'data.result', defaultValue);
  }
  return defaultValue as unknown as T;
};
/**
 * 处理网络请求返回数据（返回数据需判断成功与否）
 */
export const booleanResult = (result: any, disableToaster = false): boolean => {
  if (_get(result, 'data.status') !== 0) {
    !disableToaster && message.success('操作成功');
    return true;
  }
  return false;
};

export const eventStreamResult = <T>(
  result?: PAxiosResponse<CommonResponse<T>> | null,
  defaultValue = {},) => {
    if (_get(result, 'data.status') === 200 && _get(result, 'data')) {
      //@ts-ignore
      return   extractDataFromEventMessage<T>(_get(result, 'data', defaultValue));
    }
    return defaultValue as unknown as T;
}

function extractDataFromEventMessage<T>(eventMessage: string): T | null {
  // 寻找第一个换行符的位置，作为 event:message 结束的位置
  const eventMessageEndIndex = eventMessage.indexOf("\n");

  // 如果找不到换行符，返回 null
  if (eventMessageEndIndex === -1) {
      console.error("Invalid event:message format.");
      return null;
  }

  // 获取 data 字段的值，即换行符后的内容
  const dataStartIndex = eventMessage.indexOf("{", eventMessageEndIndex);
  const dataEndIndex = eventMessage.lastIndexOf("}");

  // 如果找不到 data 字段，返回 null
  if (dataStartIndex === -1 || dataEndIndex === -1) {
      console.error("Invalid data field format.");
      return null;
  }

  const dataString = eventMessage.substring(dataStartIndex, dataEndIndex + 1);

  try {
      const data = JSON.parse(dataString);
      if (typeof data === "object") {
          return data as T;
      }
  } catch (error) {
      console.error("Error parsing data field:", error);
  }

  return null;
}

/**
 * 处理网络请求返回数据(返回array类型数据,useTableRequest专用)
 */
// export const processList = <T extends ArrayLike<T[number]>>(
//   result: PAxiosResponse<IListCommonResponse<T>> | null,
//   defaultValue: any = [],
// ): IListCommonResponse<T> => {
//   const defaultData = {
//     errcode: 0,
//     errmsg: '',
//     data: {
//       total: 0,
//       pages: 1,
//       items: defaultValue,
//     },
//   };
//   if (_get(result, 'data.status') === 0) {
//     return _get(result, 'data', defaultData as IListCommonResponse<T>);
//   }
//   return defaultData as IListCommonResponse<T>;
// };
