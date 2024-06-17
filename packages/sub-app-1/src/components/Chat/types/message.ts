

export interface IStreamMessageFetch {
  /**
   * 消息内容，json格式，根据不同消息类型进行解析处理
   */
  message: string | Record<string, any>;
  /**
   * 会话配置，预留字段，表示会话的配置信息，在对话中影响对话内容的处理逻辑
   */
  message_setting: { [key: string]: any };
  /**
   * 消息类型，支持text消息，voice消息，image消息，file消息等，不同的消息类型对应的消息内容结构也不同，详情参考消息内容格式
   */
  message_type: string;
  /**
   * 会话id，会话id
   */
  session_id: string;
}


export interface ISource {
  source_name: string;
  source_type: string;
  source_contents: string;
  source_meta: Record<string, any>;
}


export interface ITableData {
  source: ISource;
  title: string | null;
  columns: string[];
  rows: string[][];
  role: string;
  intention: string | null;
}

export interface ITextData {
  source: ISource;
  title: string | null;
  text: string;
}

export interface IBotMessage<T extends ContentType> {
  session_id: string;
  message_id: string;
  message_type: string;
  message: T;
  role: string;
  intention: string | null;
}

export type ContentType =  ITableData | string | ITextData;
