import React, { useEffect, useState } from 'react';
import { useRequest, useUpdateEffect } from 'ahooks';
import { getReportDetailById, getTmpDetailById, officeConfigApi, updateReportTitle, updateTemplateTitle } from '@/services/report';
import { IDocumentResult } from '@/types/document';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import EditOffice from './components/EditOffice';
import ReportOffice from './components/Report';
import ChatFloat from '@/components/ChatFloat';

export default function Office() {

    const [currentDocumentConfig, setCurrentDocumentConfig] = useState<IDocumentResult>();

    const [currentTitle, setCurrentTitle] = useState<string>('');

    const [currentMode, setCurrentMode] = useState<'ReportInstance' | 'ReportTemplate'>();

    const [currentReportId, setCurrentReportId] = useState('');

    const [currentTemplateId, setCurrentTemplateId] = useState('');

    const [currentOfficeCom, setCurrentOfficeCom] = useState<React.ReactNode>();

    useEffect(() => {
        // 获取queryParams
        const queryParams = new URLSearchParams(window.location.search);
        const reportId = queryParams.get('report_id');
        const tmpId = queryParams.get('template_id');
        const orginMode = queryParams.get('origin_mode');

        if (orginMode === 'ReportInstance' || orginMode === 'ReportTemplate') {
            setCurrentMode(orginMode);
        }

        if (reportId) {
            setCurrentReportId(reportId)
        }

        if (tmpId) {
            setCurrentTemplateId(tmpId)
        }

    }, [])

    useUpdateEffect(() => {
        if (currentReportId) {

            getDetailById(currentReportId)

            configOffice({
                origin_mode: "ReportInstance",
                origin_value: Number(currentReportId),
                action: "vieworigin"
            })


        }
    }, [currentReportId])

    useUpdateEffect(() => {
        if (currentTemplateId) {
            getTplDetailById(currentTemplateId)
            configOffice({
                origin_mode: "ReportTemplate",
                origin_value: Number(currentTemplateId),
                action: "edit"
            })
        }
    }, [currentTemplateId])

    useUpdateEffect(() => {
        if (currentDocumentConfig) {

            if (currentReportId) {
                setCurrentOfficeCom(<ReportOffice reportId={currentReportId} documentConfig={currentDocumentConfig} />)
            }

            if (currentTemplateId) {
                setCurrentOfficeCom(<EditOffice officeHeight='90vh' reportId={currentTemplateId} documentConfig={currentDocumentConfig} id={'docxEditor'} mode={'ReportTemplate'} action={'edit'} />)
            }
        }
    }, [currentDocumentConfig])


    const { run: getDetailById } = useRequest(getReportDetailById, {
        manual: true,
        onSuccess: res => {

            if (res && res.result.report_info.name) {
                setCurrentTitle(res.result.report_info.name)
            }

        }
    })

    const { run: getTplDetailById } = useRequest(getTmpDetailById, {
        manual: true,
        onSuccess: res => {
            if (res && res.result.template_name) {
                setCurrentTitle(res.result.template_name)
            }

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

    return (
        <>
            {currentMode &&
                <PageContainer title={<EditTitle isEdit={false} mode={currentMode} id={currentReportId || currentTemplateId} title={currentTitle} />}  >
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{
                            flex: 1,
                            width: '100%',
                            height: '100%',
                            paddingLeft: 10,
                            position: "relative",
                        }}>
                            {currentOfficeCom}
                        </div>
                    </div>
                </PageContainer>

            }

            < ChatFloat />
        </>
    );
}

const EditTitle: React.FC<{ isEdit: boolean, mode: 'ReportInstance' | 'ReportTemplate', id: string, title?: string }> = (props) => {

    const { isEdit, title, id, mode } = props

    const [currentEdit, setCurrentEdit] = useState(isEdit);

    const [newTitle, setNewTitle] = useState<string>(title ?? '')

    const { run: updateTmpTitle } = useRequest(updateTemplateTitle, {
        manual: true,
        onSuccess: res => {

            setCurrentEdit(false);
        }
    })

    const { run: updateReportName } = useRequest(updateReportTitle, {
        manual: true,
        onSuccess: res => {
            setCurrentEdit(false);
        }
    })

    useEffect(() => {
        if (title) {
            setNewTitle(title);
        }

    }, [props])


    const handleSaveTitle = (e: any) => {
        setNewTitle(e.target.value);


        if (mode) {
            switch (mode) {
                case "ReportInstance":
                    {
                        updateReportName(id, e.target.value)
                    }
                    break;
                case "ReportTemplate":
                    {
                        updateTmpTitle(id, e.target.value)
                    }
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <>
            {
                currentEdit ? (
                    <>
                        <div style={{
                            display: "flex",
                            justifyContent: "start"
                        }}>
                            <Input defaultValue={title} value={newTitle} style={{ width: 200, }} onChange={(e) => {
                                setNewTitle(e.target.value)
                            }} onPressEnter={handleSaveTitle}></Input>
                        </div>

                    </>
                ) : (
                    <>
                        <div style={{
                            display: "flex",
                            justifyContent: "start"
                        }}>
                            <span style={{ fontSize: 16 }}>{newTitle ?? ''}</span>
                            <Button type="text" onClick={() => {
                                setCurrentEdit(true)
                            }} icon={<EditOutlined />}></Button>
                        </div>

                    </>
                )
            }

        </>
    )
}