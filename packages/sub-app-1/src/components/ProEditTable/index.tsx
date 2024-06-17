
//@ts-nocheck
import {
  EditableProTable,
  ProColumns,

} from '@ant-design/pro-components';
import { useUpdateEffect } from 'ahooks';
import _ from 'lodash';
import React, { useMemo, useState } from 'react';



export type EditableProTableProps = React.ComponentProps<typeof EditableProTable>;

export type IProEditTableProps = {
  onDataSourceChange: (newDataSource: any) => void;
} & EditableProTableProps;

export default (props: EditableProTableProps) => {


  const { onDataSourceChange, value } = props;

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);


  const [dataSource, setDataSource] = useState<readonly Record<string, any>[] | undefined>(props.dataSource || value);


  const defaultOption: ProColumns = useMemo(() => ({
    title: '操作',
    valueType: 'option',
    width: 200,

    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a
        key="delete"
        onClick={() => {
          setDataSource(dataSource.filter((item) => item.id !== record.id));
        }}
      >
        删除
      </a>,
    ],
  }), [dataSource])

  const { columns } = props;

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource])

  // 遍历columns,判断是否有操作列
  const hasOptionColumn = columns?.some((item) => item?.valueType === 'option');
  if (!hasOptionColumn) {
    columns?.push(defaultOption);
  }

  return (
    <>
      <EditableProTable
        pagination={false}
        rowKey="id"
        value={dataSource}
        recordCreatorProps={
          {
            position: 'bottom',
            record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
          }
        }
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            //  先判断 rowKey 是否与 dataSource 中的某一个对象的id相同. 如果是则表示编辑处理,如果不是,则表示新增处理.
            // 如果是新增处理，需要将 data 添加到 dataSource 中
            // 如果是编辑处理，需要将 data 更新到 dataSource 中
            if (!dataSource.some((item) => item.id === rowKey)) {
              setDataSource([...dataSource, data]);
            } else {
              const newData = dataSource.map((item) => {
                if (item.id === rowKey) {
                  return {
                    ...item,
                    ...data,
                  };
                }
                return item;
              });
              setDataSource(newData)
            }
          },
          onChange: setEditableRowKeys,

        }}
        {...(_.omit(props, ['onDataSourceChange']))}
        columns={columns}
      />
    </>
  );
};
