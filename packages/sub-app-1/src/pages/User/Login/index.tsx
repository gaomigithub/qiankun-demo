import { ProLoginForm } from '@/components/ProLoginForm';
import Div from '@/components/div';
import { httpHandler } from '@/utils/datasource';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { useNavigate } from '@umijs/max';
import { message } from 'antd';
import moment from 'moment';
import schema from './schema';

const components = {
  Div: Div,
  ProLoginForm: ProLoginForm,
};

export interface IToken {
  access_token: string;
  refresh_token: string;
  isAutoLogin: boolean;
  expires_in?: number;
}

const Login = () => {
  const history = useNavigate();

  const handleLoginSuccess = (res: Common.Login) => {
    const { isAutoLogin = false } = res;
    const { access_token, refresh_token, access_expires, refresh_expires } =
      res.result;
    if (res && access_token) {
      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('access_expires', access_expires.toString());
      localStorage.setItem('refresh_expires', refresh_expires.toString());

      localStorage.setItem('isAutoLogin', isAutoLogin ? '1' : '0');
      const defaultLoginSuccessMessage = '登录成功！';
      message.success(defaultLoginSuccessMessage);

      if (!history) return;

      history('/');
    }
  };

  const handleLoginError = (error: any) => {
    // message.error(error);
  };

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
            handleLoginSuccess: handleLoginSuccess,
            handleLoginError: handleLoginError,
          },
        }}
      />
    </>
  );
};

export default Login;
