import React, { useEffect } from 'react';
import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, { Bubble, MessageProps, useMessages, Message } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import useTypewriter from "react-typewriter-hook/build/useTypewriter";

import { useRequest, useUpdateEffect } from 'ahooks';
import _ from 'lodash';
import { ContentType, IBotMessage } from '../../types/message';
import { postStreamMessageApi } from '../../services/message';
import { message } from 'antd';


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

  const { messages, appendMsg, setTyping, resetList, } = useMessages([]);

  const { run: postStreamMessage } = useRequest(postStreamMessageApi, {
    manual: true,
    onSuccess: (res) => {
      let cont = '';

      if (_.isArray(res)) {
        res.forEach(item => {
          cont += _.get(item, 'result.message.text');
        })
      }

      if (cont.length > 0) {
        appendMsg({
          type: "text",
          content: JSON.stringify({
            message_type: "text",
            message: cont,
            role: 'assistant',
            position: 'left',
          }),
        });
      }

      // if (res && _.get(res, 'message')) {
      //   appendMsg({
      //     type: _.get(res, 'message_type') as unknown as string,
      //     content: JSON.stringify(res),
      //   });
      // } else {
      //   setTyping(false);
      // }
    },
    onError: (e) => {
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
        message_setting: { "collection_name": "zhikeyuan_qa_collection", "summary": "all", "llm_model_name": "chatglm[glm-4]" }
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
    // if (_.isEmpty(initialMsgs)) {
    //   const helloMsgObj: Partial<IBotMessage<ContentType>> = {
    //     message_type: 'hello',
    //     message: '您好，我是智能助手，有什么可以帮您？',
    //     role: 'assistant',
    //   }

    //   appendMsg({
    //     type: 'hello',
    //     content: JSON.stringify(helloMsgObj),
    //   })
    // }
  }, []);

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

        handleSend && handleSend(type, content)
      }}
    />
  );
}

export default ChatUI;

const mock = {
  "status": 1,
  "success": true,
  "result": {
    "session_id": "8db172c8-e2d1-11ee-b185-018e42578170",
    "message_id": "98ec692a-e2cd-11ee-b940-525400b81b97",
    "message_type": "table_data",
    "message": {
      "source": {
        "source_name": "报表导入",
        "source_type": "bot_info",
        "source_contents": "数据源导入",
        "source_meta": {}
      },
      "title": null,
      "columns": [
        "名称",
        "描述"
      ],
      "rows": [
        [
          "agent_config",
          "智能体配置"
        ],
        [
          "agent_question",
          "智能体问题配置"
        ],
        [
          "agent_task_progress",
          ""
        ],
        [
          "alembic_version",
          ""
        ],
        [
          "celery_task_progress_message",
          ""
        ],
        [
          "chat_history",
          ""
        ],
        [
          "chat_session",
          ""
        ],
        [
          "customer_import_record",
          ""
        ],
        [
          "doc_knowledge",
          "知识档案库"
        ],
        [
          "doc_knowledge_file",
          "知识档案 - 文件表"
        ],
        [
          "file_resource",
          ""
        ],
        [
          "modal_label",
          ""
        ],
        [
          "task_process_status",
          ""
        ]
      ]
    },
    "role": "assistant",
    "intention": null
  },
  "message": "success",
  "timestamp": 1710510282310,
  "request_id": "2d1f71a6-e2d2-11ee-8e8f-018e425b9646"
}
