
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, InputRef, Space } from 'antd';
import React, { useRef, useState } from 'react';

import { Select as OriginalSelect } from 'antd';
import { withWrap } from '../../utils/hoc';

const Select = withWrap(OriginalSelect);

export type EditSelectProps = React.ComponentProps<typeof Select> & {
  addItemAction?: (value?: string) => void;
  inputPlaceholder?: string,
  actionTitle?: string,
};

export default (props: EditSelectProps) => {

  const { addItemAction, inputPlaceholder, actionTitle, ...originProps } = props;

  const [name, setName] = useState('')

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const inputRef = useRef<InputRef>(null);

  return (
    <Select
      dropdownRender={(menu: any) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder={inputPlaceholder ?? "输入组名,组名不可重复"}
              ref={inputRef}
              value={name}
              onChange={onNameChange}
            />
            <Button type="text" icon={
              //@ts-ignore
              <PlusOutlined />
            } onClick={(e) => {
              e.preventDefault();
              addItemAction(name);
              setTimeout(() => {
                setName('');
                inputRef.current?.focus();
              }, 0);
            }}>
              {actionTitle ?? "新增"}
            </Button>
          </Space>
        </>
      )}
      {
      ...originProps
      }
    />
  )

}
