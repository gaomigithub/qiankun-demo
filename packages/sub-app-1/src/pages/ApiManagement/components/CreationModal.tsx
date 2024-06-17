import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ModalFormProps,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { memoize } from 'lodash';
import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

// interface CallbackInterface {
//   <T>(params: T): Promise<boolean>;
// }

interface ModalProps extends ModalFormProps {
  title: string;
  callback?: any;
  initialValues?: Partial<ServiceManagement.ServiceInfo>;
  trigger: JSX.Element | undefined;
}

export const MyParameterItems = memo(
  (props: {
    counts: number;
    initialValues?: any[];
    submitter: boolean;
    form?: FormInstance<any>;
    callback: (params?: string) => void;
  }) => {
    const { counts, initialValues, submitter, form, callback } = props;

    const [itemArr, setItemArr] = useState(initialValues ?? []);

    useEffect(() => {
      const transformedObject: { [key: string]: string } = itemArr.reduce(
        (accumulator, currentValue) => {
          return { ...accumulator, [currentValue]: currentValue };
        },
        {},
      );

      // console.log('itemArr updated, setting form... ', { transformedObject });

      setTimeout(() => {
        form?.setFieldsValue(transformedObject);
      });
    }, [form, itemArr]);

    const handleClickMinusButton = useMemo(
      () =>
        memoize((idx: number) => {
          return () => {
            const _originItemArr = [...itemArr];

            _originItemArr.splice(idx, 1);

            setItemArr(_originItemArr);

            callback();
          };
        }),
      [callback, itemArr],
    );

    useEffect(() => {
      if (counts > itemArr.length) {
        setItemArr([...itemArr, ...Array(counts - itemArr.length)]);
      } else if (counts < itemArr.length) {
        setItemArr(itemArr.slice(0, counts));
      }
    }, [counts, itemArr]);

    const res = useMemo(() => {
      return itemArr.map((val, idx) => {
        return (
          <Form.Item
            key={idx + 'itemcontainer'}
            // rules={[{ required: true }]}
            style={{
              width: '100%',
              marginBottom: 0,
            }}
          >
            <Form.Item
              key={idx + `-input-itemcontainer`}
              style={{
                display: 'inline-block',
                width: '50%',
                marginRight: '8px',
                marginBottom: 0,
              }}
            >
              <ProFormText
                key={idx + `-input`}
                name={val ?? `newParam${idx}`}
                placeholder="请输入参数"
                initialValue={initialValues?.[idx]}
                fieldProps={{
                  onBlur: (e) => {
                    const _arr = [...itemArr];
                    _arr[idx] = e.target.value;
                    setItemArr(_arr);
                  },
                  onChange: (e) => {
                    form?.setFieldsValue({
                      [`newParam${idx}`]: e.target.value,
                    });
                  },
                }}
              />
            </Form.Item>
            {submitter !== false && counts !== 1 && (
              <Button
                key={idx + `-button`}
                style={{
                  display: 'inline-block',
                }}
                onClick={handleClickMinusButton(idx)}
                icon={<MinusOutlined />}
              />
            )}
          </Form.Item>
        );
      });
    }, [
      counts,
      form,
      handleClickMinusButton,
      initialValues,
      itemArr,
      submitter,
    ]);
    return <Fragment>{res}</Fragment>;
  },
);

export const CreationModal = memo((props: ModalProps) => {
  const { title, initialValues, trigger, callback, ...other } = props;

  const [isOpen, setIsOpen] = useState(false);

  const params: Array<{ [key: string]: string }> = useMemo(() => {
    if (initialValues?.params) {
      return initialValues.params.reduce(
        (acc: { [key: string]: string }[], currentValue) => {
          acc.push({ [currentValue]: currentValue });
          return acc;
        },
        [],
      );
    } else {
      return [];
    }
  }, [initialValues?.params]);

  const [parameterCounts, setParameterCounts] = useState(1);
  // const [params, setParams] = useState([]);

  const handleClickIncreaseParameter = useCallback(() => {
    setParameterCounts(parameterCounts + 1);
  }, [parameterCounts, setParameterCounts]);

  const handleClickMinusParameter = useCallback(() => {
    setParameterCounts(parameterCounts - 1);
  }, [parameterCounts, setParameterCounts]);

  const handleCallback = useCallback(
    (val) => {
      handleClickMinusParameter();
    },
    [handleClickMinusParameter],
  );

  const handleFinish = useCallback(
    async (formData: Record<string, any>) => {
      const values = formData as ServiceManagement.ServiceCreateInfo;

      // const res = values.params.map((obj) => Object.values(obj)[0]);

      let params: string[] = [];

      // 遍历原始对象，提取除了label和api_uri之外的键的值
      for (let key in values) {
        if (key !== 'label' && key !== 'api_uri') {
          params.push(values[key]);
        }
      }

      if (initialValues?.id) {
        // await callback?.({ ...values, params: res, id: initialValues.id });
        await callback?.({ ...values, params, id: initialValues.id });
      } else {
        // await callback?.({ ...values, params: res });
        await callback?.({ ...values, params });
      }
      return true;
    },
    [callback, initialValues?.id],
  );

  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
    }
  }, [form, isOpen]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        form.resetFields();
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }

      if (!initialValues) {
        setParameterCounts(1);
      } else {
        setParameterCounts(initialValues.params?.length || 1);
      }
    },
    [form, initialValues],
  );

  useEffect(() => {
    setParameterCounts(initialValues?.params?.length || 1);
  }, [initialValues?.params?.length, setParameterCounts]);

  return (
    <ModalForm
      {...other}
      form={form}
      preserve={false}
      title={title}
      trigger={trigger}
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
      onOpenChange={handleOpenChange}
      onFinish={handleFinish}
    >
      <ProFormText
        name="label"
        label="服务名"
        // tooltip="最长为 24 位"
        placeholder="请输入名称"
        rules={
          props.submitter !== false
            ? [{ required: true, message: '请输入服务名!' }]
            : []
        }
        initialValue={initialValues?.label}
      />
      <ProFormText
        name="api_uri"
        label="API地址"
        rules={
          props.submitter !== false
            ? [{ required: true, message: '请输入API地址!' }]
            : []
        }
        placeholder="请输入API地址"
        initialValue={initialValues?.api_uri}
      />

      <Form.Item label="参数" style={{ marginBottom: 0 }}>
        <MyParameterItems
          form={form}
          counts={parameterCounts}
          submitter={props.submitter !== false ? true : false}
          initialValues={initialValues?.params ?? params}
          callback={handleCallback}
        />
      </Form.Item>
      {props.submitter !== false && (
        <Button
          style={{ marginLeft: '25%' }}
          onClick={handleClickIncreaseParameter}
          icon={<PlusOutlined />}
        />
      )}
    </ModalForm>
  );
});
