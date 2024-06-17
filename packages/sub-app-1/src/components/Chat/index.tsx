import { MessageProps } from '@chatui/core';
import { useRequest, useUpdateEffect } from 'ahooks';
import { memo, useEffect, useState } from 'react';
import ChatUI from './components/ChatUI';
import HelloMessage from './components/Hello';
import TableContent from './components/Table';
import TextContent from './components/Text';
import {
  createSessionApi,
  postSessionMessageListApi,
} from './services/session';
import { ContentType, IBotMessage } from './types/message';
import { IMessage, ISession } from './types/session';

const msgContentMap: Record<
  string,
  React.FC<{ msgObj: Partial<IBotMessage<ContentType>> }>
> = {
  table_data: TableContent,
  hello: HelloMessage,
  text: TextContent,
};

interface ChatProps {
  visible?: boolean;
}

export const Chat = memo((props: ChatProps) => {
  const { visible } = props;
  const [messageList, setMessageList] = useState<IMessage[]>();

  const [currentSession, setCurrentSession] = useState<ISession>();

  /** 获取对话消息记录 */
  const { run: postSessionMessageList } = useRequest(
    postSessionMessageListApi,
    {
      manual: true,
      onSuccess: (res) => {
        console.log('setMessageList res:', res);
        //@ts-ignore
        setMessageList(res);
      },
    },
  );

  /** 获取session_id*/
  const { run: runCreateSession } = useRequest(createSessionApi, {
    manual: true,
    onSuccess: (res: any) => {
      const { session_id } = res;
      setCurrentSession({
        session_id,
        is_top_stick: false,
        session_icon: '',
        session_name: '',
        session_title: null,
        top_stick_order: 0,
      });
    },
  });

  useEffect(() => {
    if (visible) {
      runCreateSession('knowledge_agent');
    }
  }, [runCreateSession, visible]);

  useUpdateEffect(() => {
    if (currentSession) {
      setMessageList(undefined);
      // postSessionMessageList(currentSession.session_id)
    }
  }, [currentSession]);

  /**
   * 处理消息类型
   */
  const handleMessageContent = (msgObj: Partial<IBotMessage<ContentType>>) => {
    // debugger;
    if (msgObj.message_type) {
      const Content = msgContentMap[msgObj.message_type];
      return <Content msgObj={msgObj} />;
    }
    return <> {msgObj ? JSON.stringify(msgObj) : ''}</>;
  };

  const convertMessageProps = (msgList: IMessage[]): MessageProps[] => {
    if (msgList) {
      return msgList.map((msg) => {
        return {
          type: msg.message_type,
          content: JSON.stringify(msg),
          position: msg.role === 'user' ? 'right' : 'left',
          _id: msg.message_id,
        };
      });
    }
    return [];
  };

  return (
    <ChatUI
      session_id={currentSession?.session_id ?? ''}
      navbar={'智能助理'}
      handleMessageContent={handleMessageContent ?? <>{''}</>}
      initialMsgs={messageList && convertMessageProps(messageList)}
    />
  );
});

export default Chat;
