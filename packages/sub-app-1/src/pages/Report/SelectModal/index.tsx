
import ReactRenderer from '@alilc/lowcode-react-renderer';
import {
  Button,
  Modal,
  Spin,
  Typography,
  message,
} from 'antd';

import schema from './schema';
import { ProTable } from '@ant-design/pro-components';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';

const components = {
  Button,
  ProTable,
  'Typography.Text': Typography.Text
};


export interface ISelectModalProps {
  handleSelectClick: (record: Record<string ,unknown>) => void
}

const SelectModal: React.FC<ISelectModalProps> = (props) => {
  
  const {handleSelectClick} = props;
  
  return <div>
  <Spin spinning={false}>
      <ReactRenderer
        //@ts-ignore
        schema={schema}
        //@ts-ignore
        components={components}
        appHelper={{
          requestHandlersMap: {
            fetch: createFetchHandler(),
          },
          utils:{
            handleSelectClick
          }
        }}
      />
    </Spin>
</div>
}

export default SelectModal;