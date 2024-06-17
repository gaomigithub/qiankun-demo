

import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Tabs, message } from 'antd';
import React, { ReactNode, useState } from 'react';

export interface IProLoginFormProps {
  defaultLoginType?: 'phone' | 'account'
  logo?: string
  title?: string
  subTitle?: string
  onFinish?: (formData: any) => Promise<boolean | void>;
  accountTab?: ReactNode
  phoneTab?: ReactNode
  accountPlaceholder?: string
  accountMessage?: string
  passwordPlaceholder?: string
  passwordMessage?: string
  phonePlaceholder?: string
  phoneMessage?: string
  captchaPlaceholder?: string
  captchaMessage?: string
  otherActions?: ReactNode
  showAutoLogin?: boolean
  showTabs?: boolean
  otherLoginOptions?: ReactNode
}

type LoginType = 'phone' | 'account';

export const ProLoginForm: React.FC<IProLoginFormProps> = (props) => {
  const {
    defaultLoginType,
    logo,
    title,
    subTitle,
    onFinish,
    showAutoLogin,
    otherLoginOptions,
    showTabs = true
  } = props;

  const [loginType, setLoginType] = useState<LoginType>(defaultLoginType ?? 'phone');
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <LoginForm
        onFinish={onFinish ? onFinish : async (formData: Record<string, any>) => {
          console.log(formData)
        }}
        logo={logo}
        title={title}
        subTitle={subTitle}
        actions={(otherLoginOptions &&
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {
              otherLoginOptions && <>
                {otherLoginOptions}
              </>
            }
          </div>)
        }
      >
        {
          showTabs && <LoginTab {...props} loginType={loginType} setLoginType={setLoginType} />
        }

        {loginType === 'account' && (
          <AccountLoginForm {...props} />
        )}
        {loginType === 'phone' && (
          <PhoneLoginForm {...props} />
        )}

        {
          showAutoLogin && <>
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
            </div>
          </>

        }
      </LoginForm>
    </div>
  );
}

const AccountLoginForm: React.FC<Partial<IProLoginFormProps>> = (props) => {

  const { accountPlaceholder, accountMessage, passwordPlaceholder, passwordMessage } = props;

  return <>
    <ProFormText
      name="username"
      fieldProps={{
        size: 'large',
        prefix: (
          //@ts-ignore
          <UserOutlined
            className={'prefixIcon'}
          />
        ),
      }}
      placeholder={accountPlaceholder ?? '用户名'}
      rules={[
        {
          required: true,
          message: accountMessage ?? '请输入用户名！',
        },
      ]}
    />
    <ProFormText.Password
      name="password"
      fieldProps={{
        size: 'large',
        prefix: (
          //@ts-ignore
          <LockOutlined
            className={'prefixIcon'}
          />
        ),
      }}
      placeholder={passwordPlaceholder ?? '密码'}
      rules={[
        {
          required: true,
          message: passwordMessage ?? '请输入密码！',
        },
      ]}
    />
  </>
}

const PhoneLoginForm: React.FC<Partial<IProLoginFormProps>> = (props) => {

  const { phonePlaceholder, phoneMessage, captchaPlaceholder, captchaMessage } = props;

  return <>
    <ProFormText
      fieldProps={{
        size: 'large',
        prefix: (
          //@ts-ignore
          <MobileOutlined
            style={{
              // color: token.colorText,
            }}
            className={'prefixIcon'}
          />
        ),
      }}
      name="mobile"
      placeholder={phonePlaceholder ?? '手机号'}
      rules={[
        {
          required: true,
          message: phoneMessage ?? '请输入手机号！',
        },
        {
          pattern: /^1\d{10}$/,
          message: '手机号格式错误！',
        },
      ]}
    />
    <ProFormCaptcha
      fieldProps={{
        size: 'large',
        prefix: (
          //@ts-ignore
          <LockOutlined
            style={{
              // color: token.colorText,
            }}
            className={'prefixIcon'}
          />
        ),
      }}
      captchaProps={{
        size: 'large',
      }}
      placeholder={captchaPlaceholder ?? '请输入验证码'}
      captchaTextRender={(timing, count) => {
        if (timing) {
          return `${count} ${'获取验证码'}`;
        }
        return '获取验证码';
      }}
      name="captcha"
      rules={[
        {
          required: true,
          message: captchaMessage ?? '请输入验证码！',
        },
      ]}
      onGetCaptcha={async () => {
        message.success('获取验证码成功！');
      }}
    />
  </>
}

const LoginTab: React.FC<Partial<IProLoginFormProps> & { loginType: 'phone' | 'account', setLoginType: (activeKey: 'phone' | 'account') => void }> = (props) => {

  const { loginType, setLoginType, accountTab, phoneTab } = props;

  return (
    <Tabs
      centered
      activeKey={loginType}
      onChange={(activeKey) => {
        setLoginType(activeKey as 'phone' | 'account')
      }}
    >
      <Tabs.TabPane key={'account'} tab={accountTab ?? '账号密码登录'} />
      <Tabs.TabPane key={'phone'} tab={phoneTab ?? '手机号登录'} />
    </Tabs>
  )
}

