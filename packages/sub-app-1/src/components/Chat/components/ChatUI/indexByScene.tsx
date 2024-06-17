import React, { useEffect } from 'react';
import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, { Bubble, MessageProps, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import { useRequest, useUpdateEffect } from 'ahooks';
import _ from 'lodash';
import { ContentType, IBotMessage } from '../../types/message';
import { postObjectMessageApi } from '../../services/message';


export interface IChatUIPageProps {
  session_id: string
  navbar: React.ReactNode | string,
  handleMessageContent: (msgStr: Partial<IBotMessage<ContentType>>) => React.ReactNode
  extraActions?: React.ReactNode[]
  message?: string
  helloMsg?: string | React.ReactNode
  helpMsgs?: { value: string, label: string }[]
  initialMsgs?: MessageProps[]
}

const ChatUI: React.FC<IChatUIPageProps> = (props) => {

  const { session_id, handleMessageContent, initialMsgs } = props

  const { messages, appendMsg, setTyping, } = useMessages([]);

  const { run: postStreamMessage } = useRequest(postObjectMessageApi, {
    manual: true,
    onSuccess: (res) => {
      const { message, message_type, role } = res;
      const { text } = message;
      if (text) {
        appendMsg({
          type: "text",
          content: JSON.stringify({
            message_type,
            message: text,
            role,
            position: 'left',
          })
        })
      }
    },
    onError: () => {
      appendMsg({
        type: "error",
        content: "error",
      });
    }
  })

  useUpdateEffect(() => {
    // messages.forEach((msg) => {
    //   deleteMsg(msg._id)
    // })
    // resetList()

  }, [session_id])

  useUpdateEffect(() => {
    if (_.isEmpty(messages)) {
      const helloMsgObj: Partial<IBotMessage<ContentType>> = {
        message_type: 'hello',
        message: '您好，我是智能助手，有什么可以帮您？',
        role: 'assistant',
      }

      appendMsg({
        type: 'hello',
        content: JSON.stringify(helloMsgObj),
      })
    }
  }, [messages])

  function handleSend(type: string, val: string) {

    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: val,
        position: 'right',
      });

      setTyping(true);

      postStreamMessage({
        session_id: session_id,
        message: { text: val },
        message_type: 'text',
        // message_setting: { "collection_name": "zhikeyuan_qa_collection", "summary": "all", "llm_model_name": "chatglm[glm-4]" }
      })
    }
  }

  function renderMessageContent(msg: MessageProps) {
    const { content } = msg;
    try {
      if (content && JSON.parse(content)) {
        return handleMessageContent(JSON.parse(content) as Partial<IBotMessage<ContentType>>)
      }
      return <Bubble content={content} />;
    } catch (error) {
      return <Bubble content={content} />;
    }

  }

  useEffect(() => {
    if (initialMsgs) {

      initialMsgs.forEach((msg) => {
        appendMsg(msg);
      });
    }
  }, [initialMsgs]);

  return (
    <Chat
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={(type: string, content: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        handleSend && handleSend(type, content)
      }}
    />
  );
}

export default ChatUI;