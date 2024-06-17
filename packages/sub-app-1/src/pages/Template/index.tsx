import ChatFloat from '@/components/ChatFloat';
import ProTable from '@/components/ProTable';
import Form from '@/components/form';
import { httpHandler } from '@/utils/datasource';
import request from '@/utils/globalRequest';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import Icon, { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import {
  Button,
  Divider,
  Input,
  Modal,
  Popconfirm,
  Select,
  Spin,
  Table,
  Tabs,
  Upload,
} from 'antd';
import moment from 'moment';
import schema from './schema';
import { useEffect } from 'react';

const components = {
  Button,
  ProTable,
  ProPopconfirm: Popconfirm,
  Icon,
  PlusOutlined,
  Modal,
  Form: Form,
  Input,
  Select,
  Upload,
  //@ts-ignore
  'Form.Item': Form.Item,
  'Input.TextArea': Input.TextArea,
  Tabs,
  Popconfirm,
  Table,
  Divider,
};

const TmplateManager = () => {
  const history = useNavigate();

  const handleUploadData = async (value: string, file: File) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');

    const formdata = new FormData();
    formdata.append('template_name', value);
    formdata.append('file', file);

    return await request('/api/v1/report/template/create', {
      method: 'post',
      data: formdata,
    });
  };

  const routeTo = (url: string) => {
    sessionStorage.setItem('tempUrl', url);
    history(url);
  };

  useEffect(() => {
    sessionStorage.removeItem('tempUrl');
  }, [])

  return (
    <>
      <PageContainer title="模板管理">
        <Spin spinning={false}>
          <ReactRenderer
            //@ts-ignore
            schema={schema}
            //@ts-ignore
            components={components}
            appHelper={{
              requestHandlersMap: {
                fetch: createFetchHandler(),
                http: httpHandler(),
              },
              utils: {
                moment: moment,
                handleUploadData: handleUploadData,
                routeTo: routeTo,
              },
            }}
          />
        </Spin>
      </PageContainer>
      <ChatFloat />
    </>
  );
};

export default TmplateManager;
