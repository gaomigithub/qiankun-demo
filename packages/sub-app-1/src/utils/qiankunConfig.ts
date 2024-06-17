import { history } from '@umijs/max';

let qiankun_state: any;
let qiankun_props: any;

let listener: Function;

export async function customFetch(url: string, ...args: any) {
  //  拦截子应用加载资源失败的情况处理
  try {
    return await window.fetch(url, ...args);
  } catch (e) {
    history.push('/404', { message: '微应用加载失败，请检查应用是否可运行' });
  }
  return {
    async text() {
      return '';
    },
  };
}

const qiankun = {
  lifeCycles: {
    // 所有子应用在挂载完成时，打印 props 信息
    async afterMount(props: any) {
      console.log(props);
    },
  },
  // 应用加载之前
  async bootstrap(props: any) {
    // setCreateHistoryOptions({ basename: props?.base || '/' });
    console.log('app1 bootstrap', props);
  },

  // 应用 render 之前触发
  async mount(props: any) {
    //  监听qiankun initState
    props.onGlobalStateChange((state: any, prev: any) => {
      qiankun_state = state;
      //  简单实现个订阅
      listener?.(state, prev);
    });
    qiankun_props = props;
  },

  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};

function getGlobalProps() {
  return qiankun_props;
}

function getGlobalState() {
  return qiankun_state;
}

function addListener(func: Function) {
  listener = func;
}

export default {
  qiankun,
  getGlobalState,
  getGlobalProps,
  addListener,
};
