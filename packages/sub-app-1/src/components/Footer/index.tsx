import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '福州埃达软件有限公司';

  const currentYear = new Date().getFullYear();

  return <DefaultFooter style={{background: 'none'}} copyright={`${currentYear} ${defaultMessage}`} />;
};

export default Footer;
