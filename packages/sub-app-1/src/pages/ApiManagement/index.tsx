import { useTableSettings } from '@/models/global';
import apiManagement from '@/services/apiManagement';
import { formatDate, truncateString } from '@/utils/format';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Popover, message } from 'antd';
import { memoize } from 'lodash';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { CreationModal } from './components/CreationModal';

function useTableRequest(reloadTable: () => void) {
  const handleRequestResult = useCallback(
    (res: Common.CommonRequestResultBase) => {
      if (res.success) {
        reloadTable();
        return true;
      } else {
        return false;
      }
    },
    [reloadTable],
  );

  const getDataSource: Common.ProTableRequest<ServiceManagement.ServiceInfo> =
    useCallback(async (params, sort, filter) => {
      const { current: page, pageSize, ...other } = params || {};

      const requestParams = {
        ...other,
        page: page ?? 1,
        page_size: pageSize ?? 10,
      };

      const res =
        await apiManagement.ServiceController.queryList(requestParams);

      return res;
    }, []);

  const createNewItem = useCallback(
    async (bodyValue: ServiceManagement.ServiceCreateInfo) => {
      const res =
        await apiManagement.ServiceController.createSerivce(bodyValue);

      const resultHandle = handleRequestResult(res);
      return resultHandle;
    },
    [handleRequestResult],
  );

  const getItemDetail = useCallback(async (params: { id: number }) => {
    const res = await apiManagement.ServiceController.getUserDetail(params);

    return res;
  }, []);

  const updateTableItem = useCallback(
    async (bodyValue: ServiceManagement.ServiceUpdateInfo) => {
      const res = await apiManagement.ServiceController.updateService({
        ...bodyValue,
      });

      const resultHandle = handleRequestResult(res);
      return resultHandle;
    },
    [handleRequestResult],
  );

  const deleteTableItem = useCallback(
    async (id: number) => {
      const res = await apiManagement.ServiceController.deleteService({
        ids: [id],
      });

      const resultHandle = handleRequestResult(res);
      return resultHandle;
    },
    [handleRequestResult],
  );

  const batchDeleteSelectedItems = useCallback(
    async (ids: number[]) => {
      const res = await apiManagement.ServiceController.deleteService({ ids });

      const resultHandle = handleRequestResult(res);
      return resultHandle;
    },
    [handleRequestResult],
  );

  return {
    getDataSource,
    createNewItem,
    getItemDetail,
    updateTableItem,
    deleteTableItem,
    batchDeleteSelectedItems,
  };
}

export const ApiManagement = memo(() => {
  const { pageSize, setPageSize } = useTableSettings();

  // const tableRef = useRef<ServiceManagement.ServiceInfo>(null);
  const tableActionRef = useRef<ActionType>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [selectedRowKeysStore, setSelectedRowKeysStore] = useState<number[]>(
    [],
  );

  const reload = useCallback(() => {
    tableActionRef.current?.reload();
  }, []);

  const {
    getDataSource,
    createNewItem,
    updateTableItem,
    getItemDetail,
    deleteTableItem,
    batchDeleteSelectedItems,
  } = useTableRequest(reload);

  const handleCreate = useCallback(
    async (bodyValue: ServiceManagement.ServiceCreateInfo) => {
      const res = await createNewItem(bodyValue);
      if (res) {
        message.success(`新增成功`);
      } else {
        message.error(`新增失败`);
      }

      return res;
    },
    [createNewItem],
  );

  const handleUpdate = useCallback(
    async (bodyValue: ServiceManagement.ServiceUpdateInfo) => {
      const res = await updateTableItem(bodyValue);
      if (res) {
        message.success(`编辑成功`);
      } else {
        message.error(`编辑失败`);
      }

      return res;
    },
    [updateTableItem],
  );

  const handleSelectedRowDelete = useMemo(
    () =>
      memoize((id: number) => {
        return async () => {
          const res = await deleteTableItem(id);

          if (res) {
            setSelectedRowKeysStore(
              selectedRowKeysStore.filter((key) => key !== id),
            );
            message.success(`删除成功`);
          } else {
            message.error(`删除失败`);
          }
          return res;
        };
      }),
    [deleteTableItem, selectedRowKeysStore],
  );

  const handleBatchDeleteSelectedItems = useMemo(
    () =>
      memoize((selectedRowKeys: ServiceManagement.ServiceInfo['id'][]) => {
        return async () => {
          setIsLoading(true);
          const res = await batchDeleteSelectedItems(selectedRowKeys);

          if (res) {
            setIsLoading(false);
            setSelectedRowKeysStore(
              selectedRowKeysStore.filter(
                (item) => !selectedRowKeys.includes(item),
              ),
            );
            message.success(`批量删除成功`);
          } else {
            setIsLoading(false);
            message.error(`批量删除失败`);
          }
          return res;
        };
      }),
    [batchDeleteSelectedItems, selectedRowKeysStore],
  );

  const columns: ProColumns<Partial<ServiceManagement.ServiceInfo>>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      valueType: 'text',
      hideInTable: true,
      search: false,
    },
    {
      title: '服务名',
      colSize: 1,
      dataIndex: 'label',
      key: 'label',
      valueType: 'text',
      render: (text, record) => {
        const content = record.label;

        // TODO: 目前样式继承太乱，需要后期找个css-in-js插件写inline修改具体css
        // const customStyle = {
        //   width: '150px',
        //   maxWidth: '150px',
        //   overflow: 'hidden',
        //   textOverflow: 'ellipsis',
        //   whiteSpace: 'nowrap',
        // };

        // return (
        //   <Popover placement="topLeft" content={content}>
        //     <span style={customStyle}>{content}</span>
        //   </Popover>
        // );

        return (
          <Popover placement="topLeft" content={record.label}>
            {truncateString(record.label ?? '', 9)}
          </Popover>
        );
      },
    },
    {
      title: 'API地址',
      dataIndex: 'api_uri',
      key: 'api_uri',
      valueType: 'text',
      search: false,
      render: (text, record) => {
        const content = record.api_uri;
        return (
          <Popover placement="topLeft" content={content}>
            {truncateString(content ?? '', 90)}
          </Popover>
        );
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updated_on',
      key: 'updated_on',
      valueType: 'text',
      renderText: (text) => {
        return formatDate(text ?? '');
      },
      search: false,
      sorter: true,
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
          <CreationModal
            title="编辑"
            trigger={
              <Button type="link" onClick={() => {}}>
                编辑
              </Button>
            }
            callback={handleUpdate}
            initialValues={record}
          />
          <Popconfirm
            key="delete"
            title=""
            description="确定删除"
            onConfirm={
              record.id ? handleSelectedRowDelete(record.id) : undefined
            }
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger>
              删除
            </Button>
          </Popconfirm>
          <CreationModal
            disabled={true}
            submitter={false}
            title="查看"
            trigger={
              <Button
                type="link"
                onClick={() => {}}
                style={{ color: '#1fa7c9' }}
              >
                查看
              </Button>
            }
            callback={getItemDetail}
            initialValues={record}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageContainer title="接入服务管理">
        <ProTable
          // options={{ reload: false }}
          rowSelection={{
            alwaysShowAlert: true,
            selectedRowKeys: selectedRowKeysStore,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeysStore(selectedRowKeys as number[]);
            },
          }}
          actionRef={tableActionRef}
          columns={columns}
          request={getDataSource}
          rowKey="id"
          pagination={{
            showQuickJumper: true,
            pageSize: pageSize,
            pageSizeOptions: ['10', '20', '30', '40'],
            onShowSizeChange: (current: number, size: number) => {
              setPageSize(size);
            },
            showSizeChanger: true,
            // showTotal: (total, range) =>
            //   `共 ${total} 条记录 第 ${range[0]}/${range[1]}页`,
          }}
          search={{
            labelWidth: 'auto',
            defaultCollapsed: false,
          }}
          form={
            {
              // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
            }
          }
          toolBarRender={(action, { selectedRowKeys }) => [
            <CreationModal
              title="新增"
              trigger={<Button type="primary">新增</Button>}
              callback={handleCreate}
              key="creatNewService"
            ></CreationModal>,

            <Button
              loading={isLoading}
              key="delete"
              disabled={!selectedRowKeys || selectedRowKeys.length === 0}
              onClick={handleBatchDeleteSelectedItems(
                selectedRowKeys as ServiceManagement.ServiceInfo['id'][],
              )}
            >
              批量删除
            </Button>,

            // <Button
            //   key="test"
            //   onClick={() => {
            //     // navigate('/datasource/management'); // const navigate = useNavigate(); 没问题
            //     // history.push('/user/login'); // 没问题
            //     // window.location.replace('/user/login'); // 不做处理会影响hash路由#
            //     const a = Date.now() + 10 * 1000;
            //     const b = Date.now();
            //     console.log({ a, b });
            //   }}
            // >
            //   redirect
            // </Button>,
          ]}
        />
      </PageContainer>
    </div>
  );
});

export default ApiManagement;
