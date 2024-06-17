

import { Bubble } from "@chatui/core";
import { Typography } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
// import useTypewriter from "react-typewriter-hook/build/useTypewriter";
import { ContentType, IBotMessage, ITextData } from "../../types/message";
import useTypewriter from "../../../../utils/react-use-typewriter";

const { Text } = Typography;

const TextContent: React.FC<{ msgObj: Partial<IBotMessage<ContentType>> }> = (props) => {

  const { msgObj } = props;

  const [msgText, setMsgText] = useState<ITextData>()

  // useEffect(() => {
  // if (msgObj && msgObj.message && _.get(msgObj, 'message.text')) {
  //   setMsgText(msgObj.message as ITextData)
  // }
  // }, [msgObj])

  //@ts-ignore
  return <Bubble content={useTypewriter({ words: [msgObj.message], typeSpeed: 100, afterTypingDelay: 0, eraseWords: false, eraseSpeed: 1, afterErasingDelay: 10 })} />


}

export default TextContent
