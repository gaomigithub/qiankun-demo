

/**
 * 会话模型
 */
export interface ISession {
  /**
   * 是否置顶，被置顶的优先展示
   */
  is_top_stick: boolean;
  /**
   * 会话图标，预设图标或者图标链接地址
   */
  session_icon: string;
  /**
   * 会话id，uuid格式，具有唯一性
   */
  session_id: string;
  /**
   * 会话名称，可修改名称
   */
  session_name: string;
  /**
   * 会话标题，一般为用户第一次对话内容前缀，限制长度20个字
   */
  session_title: null | string;
  /**
   * 置顶顺序，取置顶的ms时间戳倒排展示
   */
  top_stick_order: number;
}

/**
 * 消息模型
 */
export interface IMessage {
  /**
   * 消息内容，json格式，根据不同的消息类型进行解析
   */
  message: any[] | boolean | number | number | { [key: string]: any } | null | string;
  /**
   * 消息ID，消息id
   */
  message_id: string;
  /**
   * 消息配置，发送消息时对应的智能体配置，仅在role=user时才不为空
   */
  message_setting?: string;
  /**
   * 消息类型，支持text消息、task消息、image消息、file消息等
   */
  message_type: string;
  /**
   * 角色，对话人角色，分为assistant(智能体)，user(用户)，system(系统)
   */
  role: string;
}
