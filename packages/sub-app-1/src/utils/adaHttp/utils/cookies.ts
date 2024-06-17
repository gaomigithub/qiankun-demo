/* istanbul ignore file */
interface CookiesOption {
  domain?: string;
  path?: string;
  expires?: number | Date | string;
  secure?: boolean;
}

/**
 * 读取cookie
 * @param key 键值
 */
export function get(key: string) {
  const value = document.cookie.match(new RegExp('\\b' + key + '=([^;]+)'));
  const result = value != null ? value[1] : '';
  return decodeURIComponent(result);
}

/**
 * 清除
 * @param option
 */
export function clear({ domain = getDefaultDomain(), path = '/' }: Pick<CookiesOption, 'domain' | 'path'> = {}) {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (const key of keys) {
      document.cookie = `${key}=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=${addSlash(path)};domain=${domain};`;
    }
  }
}

/**
 * 将path末尾加上/
 * @param path
 */
function addSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * 获取上一级域名，用于共享cookie数据， 例如admin.icode.com -> .icode.com
 */
function getDefaultDomain(): string {
  let domain = window.location.hostname;
  if (!(domain.indexOf('localhost') > -1 || domain.startsWith('1'))) {
    // 非本地开发环境
    if (domain.indexOf('.') !== domain.lastIndexOf('.')) domain = domain.substring(domain.indexOf('.'));
  }
  return domain;
}

export default {
  get,
  clear,
};
