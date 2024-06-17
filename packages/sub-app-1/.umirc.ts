import { defineConfig } from '@umijs/max';
import { LOGIN_PATH } from './src/utils/common';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  theme: {
    'primary-color': '#ea1244',
  },
  mfsu: false,
  antd: {
    configProvider: {
      theme: {
        token: {
          colorPrimary: '#1fa7c9',
          borderRadius: 2,
        },
        components: {
          Button: {
            colorPrimary: '#1fa7c9',
          },
        },
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
    logo: '/logo.ico',
  },
  publicPath: '/',
  favicons: ['/logo.ico'],
  history: { type: 'browser' },
  proxy: {
    '/api/v1/user/menu': {
      target: 'http://101.35.23.121:8008',
      changeOrigin: true,
    },
    '/api': {
      target: 'http://101.35.23.121:8008',
      changeOrigin: true,
    },
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/Chat',
      component: './Home',
    },
    {
      path: LOGIN_PATH,
      layout: false,
      name: 'login',
      component: './User/Login',
    },
    // {
    //   name: '我的数据',
    //   path: '/home',
    //   icon: 'DashboardOutlined',
    //   component: './Home',
    // },
    // {
    //   name: '图表配置',
    //   path: '/chart',
    //   icon: 'AreaChartOutlined',
    //   component: './Chart',
    // },
    // {
    //   name: '章节配置',
    //   path: '/chapter',
    //   icon: 'BarsOutlined',
    //   component: './Chapter',
    // },
    {
      name: '报告配置',
      path: '/report',
      icon: 'FilePptOutlined',
      routes: [
        {
          name: '报告组装',
          path: '/report/connect',
          component: './Report',
        },
        {
          name: '模板管理',
          path: '/report/template',
          component: './Template',
        },
        {
          name: '变量管理',
          path: '/report/varname',
          component: './Varname',
        },
        {
          name: '变量规则管理',
          path: '/report/rule',
          component: './VarnameRule',
        },
        {
          name: '报告管理',
          path: '/report/newreport',
          component: './NewReport',
        },
        {
          name: '文档编辑',
          path: '/report/office',
          component: './Office',
          hideInMenu: true,
        },
      ],
    },
    {
      name: '数据来源',
      path: '/datasource',
      icon: 'EditOutlined',
      routes: [
        {
          name: '数据源管理',
          path: '/datasource/management',
          component: './Datasource',
        },
        {
          name: '接入服务管理',
          path: '/datasource/apimanagement',
          component: './ApiManagement',
        },
      ],
    },
    {
      name: '知识库问答',
      path: '/chat',
      icon: 'MessageOutlined',
      component: './Chat',
    },
    {
      name: '智能助理',
      path: '/ai-assistant',
      icon: 'MessageOutlined',
      component: './AiAssistant',
    },
  ],
  qiankun: {
    slave: {}, //微应用必须配置
  },
  // runtimeHistory: {}, //  开始运行时history功能
  mountElementId: 'micro-app-1', //  容器ID
  base: '/', //  umi微应用独立访问需要配置这个参数, 否则默认获取package.name作为base
  // publicPath: `/${packageName}/`,
  // outputPath: `./dist/${packageName}`,
  // hash: true,
});
