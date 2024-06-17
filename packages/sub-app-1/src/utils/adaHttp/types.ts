import type { AxiosError, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

export type DedupeConfig = {
  /**
   * 防抖延迟
   */
  delay: number;
};

/** http配置项 */
export interface PHttpConfig extends Pick<PAxiosRequestConfig, 'onError' | 'dedupe' | 'forceReportError'> {
  /**
   * 响应错误回调,业务状态码非0时，如401，503等
   */
  onResponseError?: (response: PAxiosResponse) => void;
  /** http配置 */
  axiosRequestConfig?: AxiosRequestConfig;
  /**
   * 请求拦截器
   */
  requestInterceptors?: PAxiosRequestInterceptor[];
  /**
   * 响应拦截器
   */
  responseInterceptors?: PAxiosResponseInterceptor[];
}

/**
 * 请求体配置项
 * */
export interface PAxiosRequestConfig extends AxiosRequestConfig {
  /** 基础错误回调，如网络错误等 */
  onError?: (error: AxiosError) => void;
  /**
   * 响应错误回调,业务状态码非0时，如401，503等
   * 作用与 {@link PHttpConfig.onResponseError} 类似，{@link PHttpConfig.onResponseError}影响全局，而该配置仅影响本次请求
   *
   * 注意:
   * 1. 该配置会覆盖全局配置
   * 2. 不同于全局的onResponseError，该配置能决定是否继续向上抛异常，
   *    即该回调内如果没有抛任何异常或没有return会reject的promise，
   *    那么本次request调用结果将得到Promise.resolve(response)
   *
   * @example
   * ```typescript
   * // 虽然接口业务状态码是非0, 但是onResponseError没有抛异常，res能得到请求结果
   * const res:PAxiosResponse = await require('/status-code-not-zero',{
   *  onResponseError: (response) => {}
   * });
   *
   * // 接口业务状态码是非0, 进入onResponseError后抛异常，最后await这行会抛异常
   * const res:PAxiosResponse = await require('/status-code-not-zero',{
   *   onResponseError: (response) => {
   *      throw new Error('xxx')
   *   }
   * });
   *
   * // onResponseError支持返回Promise, 会等待这个Promise结束后 res才会得到结果
   * const res:PAxiosResponse = await require('/status-code-not-zero',{
   *   onResponseError: (response) => {
   *      return new Promise(()=>{
   *         // 异步操作
   *      })
   *   }
   * });
   * ```
   * */
  onResponseError?: (response: PAxiosResponse) => void | Promise<any>;
  /**
   * 是否格式转化？请求体转snake_case,响应体属性转驼峰风格
   * */
  formatTransform?: boolean;
  /**
   * 请求防抖配置
   * @defualt true
   */
  dedupe?: boolean | DedupeConfig;
  /**
   * 自定义扩展参数
   */
  options?: Record<string, unknown>;
  /**
   * 全局的PAxiosRequestConfig
   */
  globalHttpConfig?: PHttpConfig;
  /**
   * 强制在业务异常时抛出异常
   * @default 'throwToGlobal' 会用setTimeout抛到全局
   */
  forceReportError?: 'throwToGlobal' | false | ((err: any) => void);
}

/**
 * @private
 */
export interface PAxiosRequestConfigForInterceptor extends PAxiosRequestConfig {
  /**
   * 将axios的可空的headers改为非空, 减少内部的判空处理
   * 在 './index.ts' 的request已经做空处理
   */
  headers: Record<string, string>;
}

type PAxiosRequestInterceptorResolve = (value: PAxiosRequestConfigForInterceptor) => PAxiosRequestConfig | Promise<PAxiosRequestConfig>;
/**
 * @private
 */
export type PAxiosRequestInterceptor = PAxiosRequestInterceptorResolve | [PAxiosRequestInterceptorResolve, (error: any) => any];
/**
 * @private
 */
export type PAxiosResponseInterceptor =
  | Parameters<AxiosInterceptorManager<PAxiosResponse>['use']>[0]
  | Parameters<AxiosInterceptorManager<PAxiosResponse>['use']>;

/**
 * 响应体配置项
 * */
export interface PAxiosResponse<T = any> extends AxiosResponse<T> {
  config: PAxiosRequestConfig;
}

// #region 给用户的工具类型

/**
 * 请求通用的相应格式
 */
export type CommonResponse<T> = {
  code?: number;
  /** 错误码 */
  status: number;
  /** 错误信息 */
  message: string;
  /** 返回数据 */
  result: T;
  /** 时间戳 */
  timestamp: string;
  /** 请求id */
  request_id: string;
  /** 是否成功 */
  success: boolean;
};

/**
 * 分页信息
 */
export interface Pager {
  /**
   * 第一个元素所在的page索引
   */
  first_item_on_page: number;
  /**
   * 最后一个元素所在的page索引
   */
  last_item_on_page: number;
  /**
   * 是否有下一页
   */
  has_next_page: boolean;
  /**
   * 是否有上一页
   */
  has_previous_page: boolean;
  /**
   * 是否是第一页
   */
  is_first_page: boolean;
  /**
   * 是否是最后一页
   */
  is_last_page: boolean;
  /**
   * 页面的数量
   */
  page_count: number;
  /**
   * 当前的page索引
   */
  page_number: number;
  /**
   * 页面元素的数量
   */
  page_size: number;
  /**
   * 元素的总数量
   */
  total_item_count: number;
}

/**
 * 用于获取列表的请求的相应格式
 */
export type ListResponse<T> = CommonResponse<T> & {
  /** 总数 */
  count?: number;
  /** 分页数据 */
  pager: Pager;
};

/**
 * 通用列表请求参数类型
 */
export type ListRequestParam<T> = T & {
  /** 页码 */
  page?: number;
  /** 一页显示数 */
  size?: number;
  /** 排序 */
  sort?: string;
};

// #endregion
