import { IDocumentResult } from "@/types/document"
import { ReactNode, useEffect, useState } from "react"

import { Button, Steps, message } from "antd";
import VarnameConfig from "./VarnameConfig";
import EditOffice from "../EditOffice";
import { useNavigate } from "@umijs/max";
import { useRequest } from "ahooks";
import { officeConfigApi, renderOfficeApi } from "@/services/report";

export interface IReportOfficeProps {
  reportId: string,
  documentConfig: IDocumentResult
}

const ReportOffice: React.FC<IReportOfficeProps> = (props) => {

  const history = useNavigate();

  const [currentDocumentConfig, setCurrentDocumentConfig] = useState(props.documentConfig)

  const [current, setCurrent] = useState(0);

  const [steps, setSteps] = useState<{ title: string, content: ReactNode }[]>([])

  const onDocumentConfigChange = (documentConfig: IDocumentResult) => {
    if (documentConfig) {
      setCurrentDocumentConfig(documentConfig)
    }
  }

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

  })

  useEffect(() => {

    if (currentDocumentConfig) {

      setSteps([
        {
          title: '变量填报',
          content: <VarnameConfig {...props} onDocumentConfigChange={onDocumentConfigChange} />,
        },
        {
          title: '报告生成',
          content: <EditOffice officeHeight="70vh" id={"docxEditor"} reportId={props.reportId} mode={"ReportInstance"} action={"edit"} documentConfig={currentDocumentConfig} />,
        },
      ])
    } else {
      setSteps([
        {
          title: '变量填报',
          content: <VarnameConfig {...props} onDocumentConfigChange={onDocumentConfigChange} />,
        },
        {
          title: '报告生成',
          content: props.documentConfig && <EditOffice officeHeight="70vh" id={"docxEditor"} reportId={props.reportId} mode={"ReportInstance"} action={"edit"} documentConfig={props.documentConfig} />,
        },
      ])
    }


  }, [currentDocumentConfig])


  const next = () => {
    renderOffice(props.reportId);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      {
        steps.length > 0 &&
        <>
          <Steps current={current} items={steps.map(item => ({ key: item.title, title: item.title }))} />
          <div style={{ marginTop: 10, }} className="steps-content">{steps[current].content}</div>
          <div className="steps-action" style={{ paddingTop: 30, display: "flex", justifyContent: "center" }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                下一步
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => {
                // 点击完成配置
                history('/report/newreport')
              }}>
                完成
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                上一步
              </Button>
            )}
          </div>
        </>

      }

    </>
  )
}

export default ReportOffice