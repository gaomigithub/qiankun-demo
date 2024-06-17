import ReactRenderer from '@alilc/lowcode-react-renderer';
import {
  Button,
  Input,
  Modal,
  Popconfirm,
  Select,
  Spin,
  Table,
  Tabs,
  Divider,
  Typography,
  Row,
  Col,
  Image
} from 'antd';
import { Cell, P } from '@alifd/layout';
import schema from './schema';
import ProTable from '@/components/ProTable';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import { httpHandler } from '@/utils/datasource';
import Icon, { PlusOutlined } from '@ant-design/icons';
import Form from '@/components/form';
import moment from 'moment'
import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { useRequest } from 'ahooks';
import { createReportByTemplate, officeConfigApi } from '@/services/report';
import ChatFloat from '@/components/ChatFloat';


const components = {
  Button,
  ProTable,
  ProPopconfirm: Popconfirm,
  Icon,
  PlusOutlined,
  Modal,
  Form: Form,
  Input,
  Select,
  //@ts-ignore
  'Form.Item': Form.Item,
  'Input.TextArea': Input.TextArea,
  'Typography.Text': Typography.Text,
  Tabs,
  Popconfirm,
  Table,
  FDCell: Cell,
  FDP: P,
  Divider,
  Row,
  Col,
  "FusionImage": Image
};

const ReportVarname: React.FC<{ report_id: string }> = (props) => {


  const { report_id } = props;

  const history = useNavigate();

  const routeTo = (url: string) => {
    history(url);
  }

  const { run: createReport } = useRequest(createReportByTemplate, {
    manual: true,
    onSuccess: (res) => {

      if (res.result && res.result.report_id) {
        history(`/report/office?report_id=${res.result.report_id}&origin_mode=ReportInstance`)
      }
    }
  })

  const handleCreateReport = (tmpId: string) => {

    createReport({
      origin_mode: "template",
      origin_value: Number(tmpId)
    })
  }

  return (
    <>

      <ReactRenderer
        //@ts-ignore
        schema={schema}
        //@ts-ignore
        components={components}
        appHelper={{
          requestHandlersMap: {
            fetch: createFetchHandler(),
            http: httpHandler(),
          },
          utils: {
            moment: moment,

          },
          constants: {
            report_id: report_id
          }
        }}
      />
      < ChatFloat />
    </>
  )
}

export default ReportVarname