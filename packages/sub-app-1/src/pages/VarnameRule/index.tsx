import request from '@/utils/globalRequest';
import type { ProColumns } from '@ant-design/pro-components';
import {
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Form, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';

interface TableListItem {
  create_by: string;
  created_on: string;
  desc: string;
  id: number;
  is_delete: number;
  updated_on: string;
  varrule_name: string;
}

interface FormFields {
  varrule_name: string;
  desc: string;
  varrule_json: Record<string, string>;
}

const selectOption = ['>', '==', '>=', '<', '<=', '!='].map((symbol) => ({
  value: symbol,
  lable: symbol,
}));

class MyModelForm extends React.Component {
  static propTypes = {
    tabRef: PropTypes.any,
    initialValues: PropTypes.object,
  };

  reLoad = async (values: FormFields) => {
    await request('/api/v1/varrule/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: values,
    });
    const { tabRef } = this.props as any;
    tabRef.current.reload();
    return true;
  };

  render(): React.ReactNode {
    return (
      <ModalForm
        title="创建"
        trigger={<Button type="primary">新增</Button>}
        width={'70%'}
        autoFocusFirstInput
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout={'horizontal'}
        modalProps={{
          destroyOnClose: true,
        }}
        submitTimeout={5000}
        onFinish={this.reLoad}
      >
        <ProFormText
          name="varrule_name"
          label="检验规则名"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true, message: '请输入规则校验名!' }]}
        />
        <ProFormText
          name="desc"
          label="描述"
          rules={[{ required: true, message: '请输入描述!' }]}
          placeholder="请输入名称"
        />

        <Form.Item label="规则" style={{ marginBottom: 0 }}>
          <Form.Item
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <ProFormSelect
              name={['varrule_json', 'opt']}
              rules={[{ required: true, message: '请选择规则!' }]}
              options={selectOption}
              label=""
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: '50%',
              margin: '0 0 0 8px',
            }}
          >
            <ProFormText
              name={['varrule_json', 'value']}
              label={''}
              rules={[{ required: true, message: '请选择规则值!' }]}
              placeholder="请输入规则值"
            />
          </Form.Item>
        </Form.Item>
      </ModalForm>
    );
  }
}

export default class VarnameRuleManager extends React.Component {
  tableRef = createRef<any>();
  /* 更新表格数据 */
  handleUploadTable = async (params: any) => {
    const { current: page, pageSize: page_size, ...other } = params;
    const requestParams: any = {
      ...other,
      page,
      page_size,
    };
    return request('/api/v1/varrule/search', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      params: requestParams,
    }).then((res: { result: { data: any; total: any } }) => {
      const { data, total } = res.result;
      return {
        data,
        success: true,
        total: total,
      };
    });
  };

  /* 删除指定的表格数据 */
  handleDeleteTableItem = async (id: number | undefined) => {
    await request('/api/v1/varrule/delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: {
        ids: [id],
      },
    });
    this.tableRef.current?.reload();
  };

  render(): React.ReactNode {
    const columns: ProColumns<TableListItem>[] = [
      {
        title: 'id',
        width: 200,
        dataIndex: 'id',
        search: false,
      },
      {
        title: '规则名',
        dataIndex: 'varrule_name',
        key: 'varrule_name',
      },
      {
        title: '描述',
        dataIndex: 'desc',
        search: false,
      },
      {
        title: '操作',
        valueType: 'option',
        key: 'option',
        width: 212,
        render: (text, record) => (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ModalForm
              key="editable"
              title="编辑"
              trigger={<Button type="link">编辑</Button>}
              width={'70%'}
              autoFocusFirstInput
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              layout={'horizontal'}
              modalProps={{
                destroyOnClose: true,
              }}
              initialValues={record}
              submitTimeout={5000}
              onFinish={async (values) => {
                const { id: varrule_id } = record;
                const params = { ...values, varrule_id };
                await request('/api/v1/varrule/edit', {
                  method: 'put',
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                  },
                  data: params,
                });
                this.tableRef.current.reload();
                return true;
              }}
            >
              <ProFormText
                name="varrule_name"
                label="检验规则名"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
                rules={[{ required: true, message: '请输入规则校验名!' }]}
              />
              <ProFormText
                name="desc"
                label="描述"
                rules={[{ required: true, message: '请输入描述!' }]}
                placeholder="请输入名称"
              />

              <Form.Item label="规则" style={{ marginBottom: 0 }}>
                <Form.Item
                  rules={[{ required: true }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <ProFormSelect
                    name={['varrule_json', 'opt']}
                    rules={[{ required: true, message: '请选择规则!' }]}
                    options={selectOption}
                    label=""
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0 0 0 8px',
                  }}
                >
                  <ProFormText
                    name={['varrule_json', 'value']}
                    label={''}
                    rules={[{ required: true, message: '请选择规则值!' }]}
                    placeholder="请输入规则值"
                  />
                </Form.Item>
              </Form.Item>
            </ModalForm>
            <Popconfirm
              key="delete"
              title=""
              description="确定删除"
              onConfirm={() => this.handleDeleteTableItem(record.id)}
              okText="确定"
              cancelText="取消"
            >
              <Button type="link" danger>
                删除
              </Button>
            </Popconfirm>
            <ModalForm
              key="show"
              title="查看"
              disabled={true}
              trigger={
                <Button type="link" style={{ color: '#1fa7c9' }}>
                  查看
                </Button>
              }
              width={'70%'}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              layout={'horizontal'}
              modalProps={{
                destroyOnClose: true,
              }}
              initialValues={record}
              submitter={false}
            >
              <ProFormText name="varrule_name" label="检验规则名" />
              <ProFormText name="desc" label="描述" />

              <Form.Item label="规则" style={{ marginBottom: 0 }}>
                <Form.Item
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <ProFormText name={['varrule_json', 'opt']} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0 0 0 8px',
                  }}
                >
                  <ProFormText name={['varrule_json', 'value']} />
                </Form.Item>
              </Form.Item>
            </ModalForm>
          </div>
        ),
      },
    ];

    return (
      <PageContainer title="变量名管理">
        <ProTable
          actionRef={this.tableRef}
          columns={columns}
          request={this.handleUploadTable}
          rowKey="id"
          pagination={{
            showQuickJumper: true,
          }}
          toolBarRender={() => [
            <MyModelForm tabRef={this.tableRef} key="creatNew"></MyModelForm>,
          ]}
        />
      </PageContainer>
    );
  }
}
