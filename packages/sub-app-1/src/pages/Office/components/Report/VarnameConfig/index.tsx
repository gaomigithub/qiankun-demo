import { IDocumentResult } from "@/types/document"
import {
  Input,
  Form,
  DatePicker,
  InputNumber,
  Spin,
  Button
} from 'antd';
import React, { useEffect, useMemo, useState } from "react"

import EditOffice from "../../EditOffice";
import { IVarnameConfig } from "@/types/varname";
import { useRequest, useUpdateEffect } from "ahooks";
import { getVarnameConfigsApi, officeConfigApi, renderOfficeApi, saveVarnameConfigApi } from "@/services/report";
import moment from "moment";
import { FieldData } from "rc-field-form/es/interface";
import _ from "lodash";


const fieldTypeComponents: Record<string, React.ReactNode> = {
  string: <Input style={{ width: "100%" }} />,
  number: <InputNumber style={{ width: "100%" }} />,
  int: <InputNumber style={{ width: "100%" }} />,
  datatime: <DatePicker picker="year" style={{ width: "100%" }} />,
  datetime: <DatePicker picker="year" style={{ width: "100%" }} />,
  date: <DatePicker picker="date" style={{ width: "100%" }} />,
  time: <DatePicker picker="time" style={{ width: "100%" }} />,
  month: <DatePicker picker="month" style={{ width: "100%" }} />,
  year: <DatePicker picker="year" style={{ width: "100%" }} />
};

// 定义策略选择函数
const getFieldComponent = (columnType: string) => {
  const component = fieldTypeComponents[columnType];
  if (!component) {
    console.error(`Unsupported column type: ${columnType}`);
    return null;
  }
  return component;
};

// 生成 Form.Item 组件
const generateFormItem = (item: IVarnameConfig) => {
  const { column_type, label, varname, value } = item;

  let FieldComponent: React.ReactNode | null


  // if (column_type === 'datatime' && value.length === 4) {
  //   debugger;
  //   FieldComponent = < DatePicker picker="year" />
  // } else {
  // FieldComponent = getFieldComponent(column_type);
  // }

  FieldComponent = <Input style={{ width: "100%" }} />

  // if (!FieldComponent) return null;

  return (
    <Form.Item
      label={label}
      name={varname}
      key={varname}
      style={{ width: "100%" }}
    >
      {
        FieldComponent
      }
    </Form.Item>
  );
};

const arrayToObject = (dataArray: IVarnameConfig[]) => {
  const result: Record<string, unknown> = {};
  dataArray.forEach((item) => {
    if (item.column_type === 'datatime'
      || item.column_type === 'time'
    ) {
      result[item.varname] = moment(item.value);
    } else {
      result[item.varname] = item.value;
    }

  });
  return result;
};

const renderFormItems = (data: IVarnameConfig[]) => {

  return data.map((item) => generateFormItem(item));
};


export interface IVarnameConfigProps {
  reportId: string,
  onDocumentConfigChange: (documentConfig: IDocumentResult) => void;
  documentConfig?: IDocumentResult
}


const VarnameConfig: React.FC<IVarnameConfigProps> = (props) => {

  const [varnameConfigs, setVarnameConfigs] = useState<IVarnameConfig[]>()

  const [showSpin, setShowSpin] = useState(false)

  const [form] = Form.useForm();

  const { reportId, onDocumentConfigChange, documentConfig } = props;

  const [currentDocumentConfig, setCurrentDocumentConfig] = useState<IDocumentResult>()

  const Document = useMemo(() => {
    if (currentDocumentConfig) {
      setShowSpin(false);

      onDocumentConfigChange(currentDocumentConfig)
      return <EditOffice officeHeight="70vh" reportId={reportId} mode={"ReportInstance"} action={"vieworigin"} documentConfig={currentDocumentConfig} id='docxEditor' />
    }
  }, [currentDocumentConfig, showSpin])

  useEffect(() => {
    if (props) {
      getVarnameConfigs(props.reportId);
      if (props.documentConfig) {
        setCurrentDocumentConfig(documentConfig)
      } else {
        configOffice({
          origin_mode: "ReportInstance",
          origin_value: Number(props.reportId),
          action: "vieworigin"
        })
      }
    }
  }, [props])

  const { run: getVarnameConfigs } = useRequest(getVarnameConfigsApi, {
    manual: true,
    onSuccess: (res) => {
      setVarnameConfigs(res);
    }
  })

  const { run: configOffice } = useRequest(officeConfigApi, {
    manual: true,
    onSuccess: (res) => {
      if (res.result) {
        setCurrentDocumentConfig(res.result);
      }
    }
  })

  const { run: renderOffice } = useRequest(renderOfficeApi, {
    manual: true,
    onSuccess: res => {
      configOffice({
        origin_mode: "ReportInstance",
        origin_value: Number(res.report_id),
        action: "vieworigin"
      });
    },
    onFinally: () => {
      setShowSpin(false);
    }
  })

  const { run: updateVarname } = useRequest(saveVarnameConfigApi, {
    manual: true,
  })

  useUpdateEffect(() => {
    if (varnameConfigs) {
      const values = arrayToObject(varnameConfigs)

      form.setFieldsValue({ ...values });
    }
  }, [varnameConfigs])

  const varnameChange = (changedFields: FieldData[]) => {

    changedFields.forEach(formData => {
      if (_.isArray(formData.name) && formData.name.length > 0 && formData.value) {
        updateVarname({
          varname: formData.name[0],
          varname_value: formData.value,
          report_id: Number(reportId)
        })
      }
    })
  }

  const onSubmit = (values: Partial<IVarnameConfig>) => {
    console.log("values:", values);
    setShowSpin(true);
    renderOffice(reportId)
  }

  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100%", paddingTop: 20, paddingBottom: 32, position: "relative" }}>
        <div style={{ width: 300, height: '68vh', overflowY: "scroll" }}>
          {varnameConfigs &&
            <Form<IVarnameConfig> onFinish={onSubmit} layout="vertical" onFieldsChange={varnameChange} form={form} >
              {renderFormItems(varnameConfigs)}
              {/* <Form.Item style={{ position: "absolute", bottom: 0, backgroundColor: '#f9f9f9', width: '100%', }}>
                <Button type="primary" htmlType="submit">
                  预览
                </Button>
              </Form.Item> */}
            </Form>}
        </div>
        <div style={{
          flex: 1,
          width: '100%',
          height: '100%',
          paddingLeft: 10,
          position: "relative",
        }}>
          {/* <Spin spinning={showSpin}> */}
          {Document && Document}
          {/* </Spin> */}

        </div>
      </div>

    </>
  )
}

export default VarnameConfig