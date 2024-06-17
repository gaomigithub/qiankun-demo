
import { ContentType, IBotMessage } from '@/types/message';
import { Card, Col, Row, Space, Typography } from 'antd';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const { Text } = Typography;

const HelloMessage: React.FC<{msgObj: Partial<IBotMessage<ContentType>> }> = (props) => {

  const { msgObj = "hello" } = props;
  const [msg, setMsg] = useState<string>("")
  useEffect(() => {
    if (msgObj && (typeof msgObj === 'string')) {
      setMsg(msgObj)
    }
    if (msgObj && _.get(msgObj, 'message')) {
      setMsg(_.get(msgObj, 'message') as unknown as string)
    }
  }, [msgObj])

  return <div style={{width: 500}}>
    <Space style={{width: '100%'}} direction="vertical" size="middle">
      { <Text> {msg} </Text> }
      <Row gutter={24}>
        <Col span={12}>
           <Card>上传excel</Card>
        </Col>
        <Col span={12}>
          <Card>连接数据库</Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Card>上传一份包含多个链接的文件</Card>
        </Col>
        <Col span={12}>
          <Card>输入一个超链接</Card>
        </Col>
      </Row>
    </Space>
  </div>
}

 export default HelloMessage;
