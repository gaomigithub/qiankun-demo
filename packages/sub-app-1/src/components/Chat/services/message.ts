
import http,  { CommonResponse }from '@/utils/adaHttp/index';
import { api, eventStreamResult, objectResult } from './_utils';
import { IBotMessage, IStreamMessageFetch, ITableData, ITextData } from '../types/message';

export const postStreamMessageApi = async (params: Partial<IStreamMessageFetch> ) => {
  
  const result = await http.post<CommonResponse<IBotMessage<ITextData>>>(
    `/api/v1/ai_chat/stream_chat`,
    params,
  );
  return eventStreamResult(result);
}

export const postObjectMessageApi = async (params: Partial<IStreamMessageFetch> ) => {
  
  const result = await http.post<CommonResponse<IBotMessage<ITextData>>>(
    `/api/v1/ai_chat/chat`,
    params,
  );
  return objectResult(result);
}