import { defineConfig } from '@umijs/max';
import routes from './config/routes';

export default defineConfig({
  antd: {
    configProvider: {
      prefixCls: 'mainAnt',
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  lessLoader: {
    modifyVars: {
      '@ant-prefix': 'mainAnt',
      'primary-color': '#004FD9',
    },
    javascriptEnabled: true,
  },
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
  routes,
  npmClient: 'pnpm',
  qiankun: {
    master: {
      prefetch: false,
    },
  },
  mfsu: false,
});
