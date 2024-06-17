export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: './Home',
    icon: 'HomeOutlined',
  },
  {
    name: 'react-micro-app',
    path: '/sub-app-2',
    component: './load',
    icon: 'SmileOutlined',
  },
  {
    name: 'react-router-micro-app',
    path: '/sub-app-3',
    microApp: 'sub-app-3',
    icon: 'SmileOutlined',
    routes: [
      {
        name: '嵌套路由1',
        path: '/sub-app-3/one',
      },
      {
        name: '嵌套路由2',
        path: '/sub-app-3/three',
      },
      {
        path: '/sub-app-3',
        redirect: '/sub-app-3/one',
      },
    ],
  },
  {
    name: 'umi4-micro-app',
    path: '/sub-app-1/*',
    layout: true,
    microApp: 'sub-app-1',
    icon: 'SmileOutlined',
  },
  {
    path: '/theme',
    name: 'theme',
    component: './Theme',
    icon: 'SmileOutlined',
  },
  {
    path: '/404',
    component: './Exception404',
  },
];
