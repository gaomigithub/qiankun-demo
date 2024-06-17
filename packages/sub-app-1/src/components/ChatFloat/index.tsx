import { CloseOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Button, FloatButton } from 'antd';
import { useState } from 'react';
import Chat from '../Chat';

const ChatFloat: React.FC = () => {
  const [showChatView, setShowChatView] = useState(false);

  return (
    <>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 24, bottom: 40 }}
        onClick={() => {
          setShowChatView(true);
        }}
        icon={<CustomerServiceOutlined />}
      />

      <div
        className="shadowed-div "
        hidden={!showChatView}
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          right: 20,
          bottom: 80,
          width: '35%',
          height: '80%',
          border: '1px solid #f1f1f1',
          borderRadius: 15,
          backgroundColor: '#fff',
          zIndex: 999,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {' '}
            {'智能助手'}{' '}
          </span>
          <Button
            type="text"
            onClick={() => {
              setShowChatView(false);
            }}
            icon={<CloseOutlined />}
          ></Button>
        </div>
        <div style={{ flex: 1 }}>
          <Chat visible={showChatView} />
        </div>
      </div>
    </>
  );
};

export default ChatFloat;
