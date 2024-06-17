// 运行时配置

import config from '@/utils/qiankunConfig';
import * as Icon from '@ant-design/icons';
import { history } from '@umijs/max';
import auth from './services/auth';
import { IRouteDto } from './types/router';
import { LOGIN_PATH } from './utils/common';
import './utils/http-init';

const loginPath = LOGIN_PATH;

type Router = {
  id: number;
  name?: string;
  path?: string;
  icon?: React.JSX.Element;
  routes?: Router[];
  component?: string;
  element?: React.ReactNode;
  redirect?: string;
  children?: Router[];
  parentId?: number;
  hideInSearch?: boolean;
  layout?: boolean;
};

export const qiankun = config.qiankun;

/**
 * 程序运行时,第一步执行 render.
 * @param oldRender
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export async function render(oldRender: Function) {
  const token = localStorage.getItem('token');

  if (!token && window.location.pathname !== loginPath) {
    // window.location.replace(loginPath);
    history.push(loginPath);
  }

  oldRender();
}

/**
 * 第二步: 执行路由的构建
 * @param config
 */
// export async function patchClientRoutes(config: { routes: any[] }) {
//   // 路由适配
//
//   const routes = routeMatch(arrangeRoutes(menuData));
//   routes.forEach((route) => {
//     config.routes[0].children.push(route);
//   });
// }

// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
/**
 * 第三步: 获取初始化数据
 * @returns
 */
export async function getInitialState(): Promise<{ name?: string }> {
  // const history = useNavigate();
  const isAutoLogin = localStorage.getItem('isAutoLogin');

  if (isAutoLogin === '0') {
    history.push(loginPath);
    return { name: '' };
  }
  try {
    const token = localStorage.getItem('token');
    if (token) {
      if (sessionStorage.getItem('tempUrl')) {
        history.push(sessionStorage.getItem('tempUrl') as string);
      } else {
        history.push('/');
      }
    } else {
      history.push(loginPath);
    }
  } catch (error) {
    history.push(loginPath);
  }
  return { name: '' };
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
/**
 * 第四步: 配置UI 布局
 * @returns
 */
export const layout = () => {
  // const history = useNavigate();

  const token = localStorage.getItem('token');

  return {
    title: '绿色低碳Agent',
    logo: '/logo.ico',
    // rightRender: () => {
    //   return RightContent;
    // },
    layout: 'mix',
    // splitMenus: true,
    logout: () => {
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('token');
      localStorage.removeItem('isAutoLogin');

      history.push(loginPath);
      return { name: '绿色低碳Agent', logo: '/logo.ico' };
    },
    menu: {
      locale: false,
      request: async (params: unknown, defaultMenuData: Router[]) => {
        if (token) {
          try {
            const res = await auth.AuthController.menuList();

            if (res) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              return routeMatch(res);
              // defaultMenuData.push(...newRoutes)
            } else {
              return [];
            }
          } catch (error) {
            console.error('Failed to fetch menu data:', error);
            return [];
          }
        } else {
          // window.location.replace(loginPath);
          history.push(loginPath);
          return [];
        }
      },
    },
    // rightContentRender: false,
    disableContentMargin: true,
    siderWidth: 208,
    contentWidth: 'Fluid',
    pwa: false,
    theme: 'dark',
  };
};

const routeMatch = (routeRes: IRouteDto[]): Router[] => {
  const routes: Router[] = [];
  routeRes.forEach((route) => {
    let newRoute: Router = {
      id: -1,
    };
    // 处理element
    try {
      newRoute = {
        id: route.id,
        name: route.menu_name,
        path: route.path,
        parentId: route.parent_id,
        // element: pageMap[route.menu_id]
        // element: route.pageId ? <TableList /> : undefined,
      };
    } catch (error) {
      console.log(error);
    }
    // 处理子路由
    if (route.children && route.children.length > 0) {
      newRoute.children = routeMatch(route.children);
    }

    // 处理图标
    if (route.icon) {
      // @ts-ignore
      if (Icon[route.icon]) {
        // @ts-ignore
        newRoute.icon = React.createElement(Icon[route.icon]);
      }
    }

    if (newRoute) {
      routes.push(newRoute);
    }
  });
  return routes;
};

// export const qiankun = {
//   lifeCycles: {
//     // 所有子应用在挂载完成时，打印 props 信息
//     async afterMount(props: any) {
//       console.log(props);
//     },
//   },
// };
