
import http,  { CommonResponse }from '@/utils/adaHttp/index';
import { api, booleanResult, objectResult, processResult } from './_utils';
import { IMessage, ISession } from '../types/session';

/**
 * 创建对话 #117464481
 * @param agent_name 智能体名称
 * @returns
 */
export const createSessionApi = async (agent_name: string) => {
  const result = await http.post<CommonResponse<ISession>>(
    `/api/v1/ai_chat/session/create`,
    {
      agent_name
    }
  );
  return objectResult(result);
};

/**
 *  对话列表 117382971
 */
export const getSessionListApi = async () => {
  const result = await http.get<CommonResponse<ISession[]>>(
    `/api/v1/ai_chat/session/list`,
  );

  return objectResult(result);
};


/**
 * 删除对话 117479769
 * @param session_id
 * @returns
 */
export const deleteSessionApi = async (session_id: string) => {
  const result = await http.del(
    `/api/v1/ai_chat/session/delete`,
    {
      data: { session_id }
    }
  );
  return booleanResult(result);
};

/**
 * 编辑对话名称 117430956
 * @param session
 * @returns
 */
export const updateSessionApi = async (session: Partial<ISession> ) => {
  const result = await http.post(
    `/api/v1/ai_chat/session/edit`,
    session,
  );
  return booleanResult(result);
};

/**
 * 置顶对话 117480140
 *
 * @param data
 * @returns
 */
export const topSessionApi = async (data:{session_id: string, is_top_stick: boolean} ) => {
  const result = await http.post(
    `/api/v1/ai_chat/session/top_stick`,
    data,
  );
  return booleanResult(result);
};

/**
 * 对话历史消息记录 117384521
 * @param session_id
 * @returns
 */
export const postSessionMessageListApi = async (session_id: string) => {
  const result = await http.post<CommonResponse<IMessage[]>>(
    `/api/v1/ai_chat/session/message/list`,
    { session_id },
  );
  return objectResult(result);
};

