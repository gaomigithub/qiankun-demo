import request from "@/utils/globalRequest";
import { ModalForm, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { Button, Form, message } from "antd"
import { memo, useState, useEffect } from "react"


interface FormFields {
    id?: string | number;
    database_name: string;
    db_source_type: string;
    host: number;
    label: string;
    password: string;
    port: string;
    tablename: string;
    username: string;
}

const selectOption = ['PostgreSQL', 'MySQL'].map((type) => ({
    value: type,
    lable: type,
}));

const openMessage = (msg) => {
    message.error(msg)
}

export const ModalForTable = memo((props: any) => {
    const { title, initialValues, trigger, reloadTable } = props;

    const [testLoading, setTestLoading] = useState<boolean>(false)

    const [submitState, setSbmitState] = useState<boolean>(false)

    useEffect(() => {
        setSbmitState(false)
    }, [initialValues])

    //创建
    const creatDbsource = async (values: FormFields) => {
        await request('/api/v1/metabase/dbsource/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: values,
        });
        reloadTable()
        return true;
    }

    //编辑
    const editDbsource = async (values: FormFields) => {
        const { id } = initialValues;
        const params = { ...values, id };
        await request('/api/v1/metabase/dbsource/edit', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            data: params,
        });
        reloadTable()
        return true;
    }

    const testConnection = async (formProps) => {
        const {
            host: hostname, //主机
            port, //端口
            database_name: database, //数据库
            username, // 用户名
            password, //密码
            db_source_type: database_type // 数据源类型
        } = formProps.form.getFieldValue()
        const values = {
            hostname,
            port,
            database,
            username,
            password,
            database_type
        }
        setTestLoading(true)
        setSbmitState(false)
        try {
            const res = await request('/api/v1/metabase/dbmetadatas/connection', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                data: values,
            });
            if (res.success) {
                setSbmitState(true)
            } else {
                openMessage(res.message)
            }
            setTestLoading(false)
        } catch (error) {
            console.log(error)
            setTestLoading(false)
        }
    }

    //表单值改变时取消可提交状态
    const onValuesChange = (changedValues, allValues) => {
        if (submitState) {
            setSbmitState(false)
        }
    }

    return (
        <ModalForm
            title={title}
            trigger={trigger}
            width={'70%'}
            autoFocusFirstInput
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout={'horizontal'}
            modalProps={{ destroyOnClose: true }}
            submitTimeout={5000}
            onFinish={initialValues.id ? editDbsource : creatDbsource}
            initialValues={initialValues}
            onValuesChange={onValuesChange}
            submitter={{
                submitButtonProps: {
                    disabled: !submitState
                },
                render: (props, defaultDoms) => {
                    return [
                        <Button
                            loading={testLoading}
                            style={{ backgroundColor: '#1677ff', color: '#ffffff' }}
                            key="ok"
                            onClick={() => {
                                props.form?.validateFields?.().then(res => {
                                    testConnection(props)
                                });
                            }}
                        >
                            测试连接
                        </Button>,
                        ...defaultDoms,
                    ];
                },
            }}
        >
            <ProFormText
                name="label"
                label="数据源名"
                tooltip="最长为 24 位"
                placeholder="请输入数据源名"
                rules={[{ required: true, message: '请输入数据源名!' }]}
            />
            <ProFormSelect
                name="db_source_type"
                label="数据源类型"
                rules={[{ required: true, message: '请选择数据源类型!' }]}
                options={selectOption}
                placeholder="请选择数据源类型"
            />

            <Form.Item label="主机及端口" required={true} style={{ marginBottom: 0 }}>
                <Form.Item
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(60% - 8px)', marginBottom: '0', }}
                >
                    <ProFormText
                        name={'host'}
                        rules={[{ required: true, message: '请输入host!' }]}
                        label=""
                        placeholder="请输入主机"
                    />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true }]}
                    style={{
                        display: 'inline-block',
                        width: '40%',
                        margin: '0 0 0 8px',
                    }}
                >
                    <ProFormText
                        name={'port'}
                        label={''}
                        rules={[{ required: true, message: '请选择端口!' }]}
                        placeholder="请输入端口"
                    />
                </Form.Item>
            </Form.Item>

            <Form.Item label="数据库及表名" required={true} style={{ marginBottom: 0 }}>
                <Form.Item
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(60% - 8px)', marginBottom: '0' }}
                >
                    <ProFormText
                        name={'database_name'}
                        rules={[{ required: true, message: '请输入数据库名' }]}
                        label=""
                        placeholder="请输入数据库名"
                    />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true }]}
                    style={{
                        display: 'inline-block',
                        width: '40%',
                        margin: '0 0 0 8px',
                    }}
                >
                    <ProFormText
                        name={'tablename'}
                        label={''}
                        rules={[{ required: true, message: '请输入表名' }]}
                        placeholder="请输入表名"
                    />
                </Form.Item>
            </Form.Item>
            <ProFormText
                name={'username'}
                label={'认证用户名'}
                rules={[{ required: true, message: '请输入认证用户名!' }]}
                placeholder="请输入认证用户名"
            />
            <ProFormText
                name={'password'}
                label={'认证密码'}
                rules={[{ required: true, message: '请输入认证密码!' }]}
                placeholder="请输入认证密码"
            />
        </ModalForm>)
})