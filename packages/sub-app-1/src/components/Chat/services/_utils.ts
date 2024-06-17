
import { message } from 'antd';
import { get as _get } from 'lodash';
import service from '../../../config';
import { PAxiosResponse } from '@/utils/adaHttp';

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
  if (_get(result, 'status') === 200 && _get(result, 'data.result')) {
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
  if (_get(result, 'status') === 200 && _get(result, 'data.result')) {
    //@ts-ignore
    return _get(result, 'data.result', defaultValue);
  }
  return defaultValue as unknown as T;
};
/**
 * 处理网络请求返回数据（返回数据需判断成功与否）
 */
export const booleanResult = (result: any, disableToaster = false): boolean => {
  if (_get(result, 'status') === 200) {
    !disableToaster && message.success('操作成功');
    return true;
  }
  return false;
};

export const eventStreamResult = <T>(
  result?: PAxiosResponse<CommonResponse<T>> | null,
  defaultValue = {},) => {

    if (_get(result, 'status') === 200 ) {
      //@ts-ignore
      // return   extractDataFromEventMessage<T>(_get(result, 'data', defaultValue));
       const dataArray =  extractEventData(_get(result, 'data'));
      return  dataArray
    }
    return defaultValue as unknown as T;
}

function extractEventData(jsonString: string): object[] {
  const dataArray: object[] = [];
  const separator = "event:";
  const events = jsonString.split(separator).slice(1); // 切割并删除开头的空字符串
  for (const event of events) {
      try {
          const eventData = extractDataFromEventMessage(event);
          if (eventData) {
            dataArray.push(eventData);
          }
         
      } catch (error) {
          console.error("Error parsing event data:", error);
      }
  }

  return dataArray;
}

function extractDataFromEventMessage<T>(eventMessage: string): Record<string,unknown> | null {
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
//   if (_get(result, 'status') === 0) {
//     return _get(result, 'data', defaultData as IListCommonResponse<T>);
//   }
//   return defaultData as IListCommonResponse<T>;
// };
