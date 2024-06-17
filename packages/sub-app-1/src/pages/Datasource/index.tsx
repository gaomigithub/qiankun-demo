import request from '@/utils/globalRequest';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Space, Table } from 'antd';
import React, { useRef } from 'react';
import { ModalForTable } from './components/ModalForTable';

interface TableListItem {
  database_name: string;
  created_on: string;
  db_source_type: string;
  host: number;
  id: number;
  is_delete: number;
  label: string;
  password: string;
  port: string;
  tablename: string;
  updated_on: string;
  username: string;
}

const DataSourceManager: React.FC = () => {

  const tableRef = useRef<ActionType>()

  /* 删除指定的表格数据 */
  const handleDeleteTableItem = async (ids: string[] | number[]) => {
    await request('/api/v1/metabase/dbsource/delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: { ids },
    });
    tableRef.current?.reload()
  };

  /* 更新表格数据 */
  const handleUploadTable = async (params: any) => {
    const { current: page, pageSize: page_size, ...other } = params;
    const requestParams: any = {
      ...other,
      page,
      page_size,
    };
    return request('/api/v1/metabase/dbsource/search', {
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

  const reloadTable = () => {
    tableRef.current?.reload()
  }

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '数据源名',
      width: 200,
      dataIndex: 'label',
    },
    {
      title: '数据源类型',
      dataIndex: 'db_source_type',
      key: 'db_source_type',
      valueType: 'select',
      valueEnum: {
        PostgreSQL: { text: 'PostgreSQL' },
        MySQL: {
          text: 'MySQL'
        }
      }
    },
    {
      title: '服务器地址',
      dataIndex: 'host',
      key: 'host',
      search: false,
    },
    {
      title: '数据库',
      dataIndex: 'database_name',
      key: 'database_name',
      search: false,
    },
    {
      title: '表名',
      dataIndex: 'tablename',
      key: 'tablename',
      search: false,
    },
    {
      title: '登录用户',
      dataIndex: 'username',
      key: 'username',
      search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'updated_on',
      valueType: 'dateTime',
      search: false,
      sorter: (a: any, b: any) => new Date(a.updated_on).getTime() - new Date(b.updated_on).getTime(),
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      width: 142,
      render: (text, record) => (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ModalForTable
            key="edit"
            title="编辑"
            initialValues={record}
            trigger={<Button type="link">编辑</Button>}
            reloadTable={reloadTable}
          ></ModalForTable>
          <Popconfirm
            key="delete"
            title=""
            description="确定删除"
            onConfirm={() => handleDeleteTableItem([record.id])}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger>
              删除
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <PageContainer title="数据源管理">
      <ProTable<TableListItem>
        actionRef={tableRef}
        columns={columns}
        rowSelection={{
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        }}
        tableAlertOptionRender={({ selectedRowKeys, onCleanSelected }) => {
          return (
            <Space size={16} onClick={() => {
              handleDeleteTableItem(selectedRowKeys as any);
              onCleanSelected()
            }}>
              <a>批量删除</a>
            </Space>
          );
        }}
        request={handleUploadTable}
        rowKey="id"
        pagination={{
          pageSize:10,
          showQuickJumper: true,
        }}
        toolBarRender={() => [
          <ModalForTable
            key='add'
            title={'新增'}
            initialValues={{}}
            reloadTable={reloadTable}
            trigger={<Button type="primary">新增</Button>}
          ></ModalForTable>,
        ]}
      />
    </PageContainer>
  )
}
export default DataSourceManager