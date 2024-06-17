

import OfficeDocument from '@/components/Document';
import { officeConfigApi } from '@/services/report';
import { IDocumentResult } from '@/types/document';
import { FullscreenOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Drawer } from 'antd';
import { useEffect, useMemo, useState } from 'react';

export interface IEditOfficeProps {
  id: string,
  reportId: string,
  mode: 'ReportInstance' | 'ReportTemplate',
  action: 'view' | 'edit' | 'vieworigin',
  documentConfig: IDocumentResult,
  officeHeight: string
}

const EditOffice: React.FC<IEditOfficeProps> = (props) => {

  const [currentDocumentConfig, setCurrentDocumentConfig] = useState<IDocumentResult>();

  const [open, setOpen] = useState(false);

  const { run: configOffice } = useRequest(officeConfigApi, {
    manual: true,
    onSuccess: (res) => {
      if (res.result) {
        setCurrentDocumentConfig(res.result);
      }
    }
  })

  useEffect(() => {
    if (props) {
      configOffice({
        origin_mode: props.mode,
        origin_value: Number(props.reportId),
        action: props.action
      })
    }
  }, [props])

  const Document = useMemo(() => {
    if (currentDocumentConfig) {
      return <OfficeDocument  {...currentDocumentConfig} id='docxEditor' />
    }
  }, [currentDocumentConfig])

  return <>
    <div style={{ display: "flex", width: "100%", height: props.officeHeight, position: "relative", }}>

      {Document && Document}
      <Button style={{
        position: "absolute",
        right: 30,
        top: 0,
        zIndex: 999
      }} type='text' onClick={() => setOpen(true)} color='#fff' icon={<FullscreenOutlined style={{ color: '#fff' }} color='#fff' />} />
    </div>

    <Drawer
      placement={"bottom"}
      style={{
        padding: 0
      }}
      open={open}

      onClose={() => setOpen(false)}
      width={"100vw"}
      height={"100%"}
    >
      <div
        style={{ width: "100%", height: '90vh' }}
      >
        {
          currentDocumentConfig && <OfficeDocument  {...currentDocumentConfig} id='docxEditor2' />
        }
      </div>

    </Drawer>
  </>
}

export default EditOffice;