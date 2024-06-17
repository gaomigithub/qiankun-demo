import { IBotMessage, ISource, ITableData , ContentType} from "@/types/message";
import { useUpdateEffect } from "ahooks";
import { Space, Table, Typography } from "antd"
import { ColumnsType as AntdColumnsType } from "antd/es/table";
import _ from "lodash";
import { useEffect, useState } from "react";

const { Text } = Typography;

interface AntdTableData {
  columns: { title: string; dataIndex: string; key: string }[];
  dataSource: Record<string, any>[];
}

function TableContent(props:{msgObj:Partial<IBotMessage<ContentType>>}) {

  const { msgObj } = props;

  const [tableData, setTableData] = useState<ITableData>()

  const [columns, setColumns] = useState<AntdColumnsType<Record<string,string>>>()

  const [currentSource, setCurrentSource] = useState<ISource>()

  const [currentAntdTableData, setCurrentAntdTableData] = useState<AntdTableData>()

  const [data, setData] = useState<Record<string,string>[]>([])

  useEffect(()=>{
    // 在这里解析 消息体 msgObj
    if (msgObj) {
      if (msgObj.message && _.get(msgObj,'message')) {
        setTableData( _.get(msgObj,'message') as ITableData);
      }
    }
  },[msgObj])

  useUpdateEffect(()=>{
    if (tableData) {
      tableData.source && setCurrentSource(tableData.source)
      setCurrentAntdTableData(processDataForAntdTable(tableData))
    }
  },[tableData])

  useUpdateEffect(()=>{
    if (currentAntdTableData) {
      setColumns(currentAntdTableData.columns)
      setData(currentAntdTableData.dataSource)
    }
  },[currentAntdTableData])

  return(
    <Space direction="vertical">
      {<Text> {currentSource?.source_contents} </Text>}
      <Table<Record<string,string>> columns={columns} dataSource={data} />
    </Space>
  )
}

function processDataForAntdTable(data: ITableData): AntdTableData {
  const columns = data.columns.map((column, index) => ({
      title: column,
      dataIndex: `column_${index}`,
      key: `column_${index}`
  }));

  const dataSource = data.rows.map((row, rowIndex) => {
      const rowData: Record<string, any> = {};
      row.forEach((cell, cellIndex) => {
          rowData[`column_${cellIndex}`] = cell;
      });
      rowData.key = `row_${rowIndex}`;
      return rowData;
  });

  return { columns, dataSource };
}

 export default TableContent;
