import TableContent from "./components/Table";
import { ContentType, IBotMessage } from "./types/message";
import HelloMessage from "./components/Hello";
// import TextContent from "./components/Text";
import ChatUI from "./components/ChatUI/indexByScene";
import { useEffect, useState } from "react";
import { IMessage, ISession } from "./types/session";
import { MessageProps,Bubble } from "@chatui/core";
import { useRequest, useUpdateEffect } from "ahooks";
import {  createSessionApi } from "./services/session";

const TextContent: React.FC<{ msgObj: Partial<IBotMessage<ContentType>> }> = (props) => {
  const { msgObj } = props;
    //@ts-ignore
  return <Bubble content={msgObj.message} />
}

const msgContentMap: Record<string, React.FC<{ msgObj: Partial<IBotMessage<ContentType>> }>> = {
  "table_data": TableContent,
  "hello": HelloMessage,
  "text": TextContent
}

export default function Chat() {

  const [messageList, setMessageList] = useState<IMessage[]>();

  const [currentSession, setCurrentSession] = useState<ISession>();

  /** 获取session_id*/
  const { run: runCreateSession } = useRequest(createSessionApi, {
    manual: true,
    onSuccess: (res: any) => {
      const { session_id } = res;
      setCurrentSession({
        session_id,
        is_top_stick: false,
        session_icon: "",
        session_name: "",
        session_title: null,
        top_stick_order: 0
      });
    }
  })
  useEffect(() => {
    runCreateSession('ai_customer_service_agent')
  }, [])

  useUpdateEffect(() => {
    if (currentSession) {
      setMessageList(undefined);
    }
  }, [currentSession]);

  /**
   * 处理消息类型
   */
  const handleMessageContent = (msgObj: Partial<IBotMessage<ContentType>>) => {
    if (msgObj.message_type) {
      const Content = msgContentMap[msgObj.message_type];
      return <Content msgObj={msgObj} />
    }
    return <>  {msgObj ? JSON.stringify(msgObj) : ""}</>
  }

  const convertMessageProps = (msgList: IMessage[]): MessageProps[] => {
    if (msgList) {
      return msgList.map((msg) => {
        return {
          type: msg.message_type,
          content: JSON.stringify(msg),
          position: msg.role === 'user' ? 'right' : 'left',
          _id: msg.message_id,
        }
      })
    }
    return []
  }

  return (
    <ChatUI
      session_id={currentSession?.session_id ?? ''}
      navbar={"智能助理"}
      handleMessageContent={handleMessageContent ?? <>{""}</>}
      initialMsgs={messageList && convertMessageProps(messageList)}
    />
  )
}