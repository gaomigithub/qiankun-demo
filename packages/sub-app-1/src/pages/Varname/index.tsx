import AdaEditor from '@/components/AdaEditor';
import ChatFloat from '@/components/ChatFloat';
import ProTable from '@/components/ProTable';
import Form from '@/components/form';
import { httpHandler } from '@/utils/datasource';
import request from '@/utils/globalRequest';
import { Cell, P } from '@alifd/layout';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import Icon, { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select,
  Spin,
  Steps,
  Table,
  Tabs,
} from 'antd';
import moment from 'moment';
import schema from './schema';
import { useState } from 'react';
import VarnameForm from './Form';
import { BaseDefinition, MergedDefinition } from '@/types/varname';
import { useUpdateEffect } from 'ahooks';

const components = {
  Button,
  ProTable,
  ProPopconfirm: Popconfirm,
  Icon,
  PlusOutlined,
  Modal,
  Form: Form,
  Input,
  Card,
  Select,
  Steps,
  'Steps.Step': Steps.Step,
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

const VarnameManager = () => {

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [tableRef, setTableRef] = useState()

  const [currentEditRecord, setCurrentEditRecord] = useState<Partial<MergedDefinition>>()

  const handleUploadData = async (value: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');

    const formdata = new FormData();
    formdata.append('template_name', value);

    return await request('/api/v1/report/template/create', {
      method: 'post',
      data: formdata,
    });
  }

  const handleCreateBtnClick = () => {
    setShowCreateModal(true);
  }

  const getTableElement = (table: any) => {
    setTableRef(table)
  }

  const handleEdit = (currentRecord: Partial<MergedDefinition>) => {

    setCurrentEditRecord(currentRecord);
    setShowEditModal(true);

  }

  return <>
    <PageContainer title="变量名管理" >
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
              handleCreate: handleCreateBtnClick,
              getTableElement: getTableElement,
              handleEdit: handleEdit
            }
          }}
        />
      </Spin>
    </PageContainer>

    <Modal
      style={{
        position: "relative"
      }}
      title="创建变量"
      width={"80%"}
      closable
      footer={null}
      onCancel={() => {
        setShowCreateModal(false);
      }}
      open={showCreateModal}
      destroyOnClose
    >
      <VarnameForm onFinishCreate={function (): void {
        setShowCreateModal(false);
        //@ts-ignore
        tableRef && tableRef.reload();
      }} onCancelCreate={function (): void {
        setShowCreateModal(false);
      }} />
    </Modal>

    <Modal
      style={{
        position: "relative"
      }}
      title="编辑变量"
      width={"80%"}
      closable
      footer={null}
      onCancel={() => {

        setShowEditModal(false);
        Modal.destroyAll();
      }}
      destroyOnClose
      open={showEditModal}
    >
      <VarnameForm currentRecord={currentEditRecord} onFinishEdit={function (): void {
        setShowEditModal(false);

        //@ts-ignore
        tableRef && tableRef.reload();
      }} onCancelEdit={function (): void {


        setShowEditModal(false);
        Modal.destroyAll();

      }} />
    </Modal>
    <ChatFloat />
  </>
}

export default VarnameManager
