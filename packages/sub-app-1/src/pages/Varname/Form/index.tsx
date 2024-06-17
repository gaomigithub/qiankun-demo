import ReactRenderer from '@alilc/lowcode-react-renderer';
import schema from './schema';
import ProTable from '@/components/ProTable';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import { httpHandler } from '@/utils/datasource';
import Icon, { PlusOutlined } from '@ant-design/icons';
import Form from '@/components/form';
import moment from 'moment'
import {
  Alert,
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Radio,
  Row,
  Select,
  Steps,
  Switch,
  Table,
  Tabs,
  Typography,
  message,
} from 'antd';

import { Cell, P } from '@alifd/layout';
import AdaEditor from '@/components/AdaEditor';
import React, { useEffect } from 'react';
import ProEditTable from '@/components/ProEditTable';
import EditSelect from '@/components/EditSelect';
import Div from '@/components/div';
import { BaseDefinition, MergedDefinition } from '@/types/varname';
import { useUpdateEffect } from 'ahooks';

const components = {
  Radio,
  Alert,
  "Typography.Text": Typography.Text,
  "Radio.Group": Radio.Group,
  Switch,
  Button,
  ProTable,
  Row,
  Col,
  "Div": Div,
  ProEditTable: ProEditTable,
  EditSelect: EditSelect,
  ProPopconfirm: Popconfirm,
  Icon,
  PlusOutlined,
  Modal,
  Form: Form,
  Input,
  Card,
  Select,
  Steps,
  "Steps.Step": Steps.Step,
  //@ts-ignore
  'Form.Item': Form.Item,
  'Input.TextArea': Input.TextArea,
  AdaEditor,
  InputNumber,
  FDCell: Cell,
  FDP: P,
  Popconfirm,
  Tabs,
  Table,
};

export interface IVarnameFormProps {
  onFinishCreate?: () => void,
  onCancelCreate?: () => void,
  currentRecord?: Partial<MergedDefinition>
  onFinishEdit?: () => void,
  onCancelEdit?: () => void
}

const VarnameFormView: React.FC<IVarnameFormProps> = (props) => {

  const { onFinishCreate, onCancelCreate, onFinishEdit, onCancelEdit, currentRecord } = props;

  const handleFinish = () => {
    onFinishCreate && onFinishCreate()
  }

  const getCurrentRecord = () => {
    return currentRecord
  }

  const render = <>
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
          finishCreate: handleFinish,
          onCancelCreate: onCancelCreate,
          errCreate: (msg?: string) => {
            message.error(msg ?? "创建失败");
          },
          onCancelEdit: onCancelEdit,
          currentRecord: getCurrentRecord
        },

      }}

    />
  </>

  return render;
}

export default VarnameFormView;