/* eslint-disable no-debugger */
import { history } from '@umijs/max';
import { message } from 'antd';
import { RequestOptionsInit, extend } from 'umi-request';
import { LOGIN_PATH } from './common';

const loginPath = LOGIN_PATH;
const API_REFRESH_TOKEN = '/api/v1/security/refresh';
const MAX_RETRIES = 3;

/**
 * 配置request请求时的默认参数
 */
export const requestUmi = extend({
  // credentials: 'include', // 默认请求是否带上cookie
  // requestType: 'form',
});

/**
 * setTimeStampAndNewToken
 * @param token access_token, 通常来自localstorage
 * @param expiresTime access_expires，token过期时间
 */
function setTimeStampAndNewToken(token: string, expiresTime: number) {
  localStorage.setItem('token', token!);
  localStorage.setItem('access_expires', expiresTime.toString());
  console.log(
    'intercepteor => setTimeStampAndNewToken: done setting token&tokenExpireTime',
  );
  return true;
}

/**
 * refreshToken，通过refresh_token请求API_REFRESH_TOKEN返回和重新固定新的access_expires和access_token
 * @param refresh_token 通常来自localstorage存储的refresh_token
 */
async function refreshToken(refresh_token: string) {
  try {
    const response = await requestUmi<Common.RefreshTokenResult>(
      API_REFRESH_TOKEN,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${refresh_token}` },
      },
    );

    console.log(`intercepteor => refreshToken running ...`);

    const { access_token, access_expires } = response.result;

    // tokenExpireTime = Date.now() + expires_in * 1000; // expires_in 通常是秒数

    // // 使用新 Token 重新发起原始请求
    // return requestUmi(url, options);
    if (access_token) {
      setTimeStampAndNewToken(access_token, access_expires);
      return true;
    } else {
      return Promise.reject(`access_token get failed`);
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    message.error('Token refresh failed, please login again.');
    history.push(loginPath);
    return Promise.reject(error);
  }
}

/**
 * @deprecated 准备废弃
 */
async function getNewAccessToken(
  url: string,
  options: RequestOptionsInit,
): Promise<boolean> {
  const refresh_token = localStorage.getItem('refresh_token');

  try {
    const tokens = await requestUmi(API_REFRESH_TOKEN, {
      method: 'POST',
      headers: { Authorization: `Bearer ${refresh_token}` },
    });

    if (tokens.access_token) {
      setTimeStampAndNewToken(tokens.access_token, tokens.access_expires);
      const requestForOriginalRequest = await requestUmi(url, options);
      return requestForOriginalRequest;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error refreshing token or retrying request:', error);
    return false;
  }
}

const compareTimeExpired = (tokenExpireTime: string) => {
  const currentTime = Date.now();
  const expireTime = parseInt(tokenExpireTime) * 1000;

  return currentTime > expireTime;
};

/**
 * 封装request，封装自动刷新token无感刷新更新token
 * @type T : 返回值根据传入类型结构定义
 */
export const request = async <T>(
  url: string,
  options: RequestOptionsInit,
): Promise<T> => {
  const refresh_token = localStorage.getItem('refresh_token');
  const refresh_expires = localStorage.getItem('access_expires');

  const isRefreshTokenExpired = compareTimeExpired(refresh_expires ?? '0');

  if (isRefreshTokenExpired) {
    // console.log(`refreshToken过期，重新获取token`);
    const refreshRes = await refreshToken(refresh_token ?? '');

    if (refreshRes) {
      // console.log(`refreshtoken成功, 封装请求运行中...`);
      return requestUmi(url, options);
    } else {
      console.error(`refreshToken catched err`);
      history.push(loginPath);
      return Promise.reject(`request error caused by refreshToken`);
    }
  } else {
    return requestUmi(url, options);
  }
};

/**
 * 所有请求拦截器
 *  1. 在请求后端API前，统一做处理，比如 改变url参数，附带统一参数等
 *  2. 预检token是否过期，如果超过时间戳则调用refreshToken()
 */
requestUmi.interceptors.request.use((url, options) => {
  let token = localStorage.getItem('token');
  const refresh_token = localStorage.getItem('refresh_token');

  return {
    url,
    options: {
      ...options,
      headers: {
        // Authorization: `Bearer ${accessToken}`,

        // 这里的业务逻辑为如果url是刷新token接口，则使用refresh_token，否则使用token；避免了刷新token接口请求时候依然使用token造成逻辑bug
        Authorization: `Bearer ${url === API_REFRESH_TOKEN ? refresh_token : token}`,
      },
    },
  };
});

/**
 * 所有响应拦截器
 *  1. 接收来自后端返回结果后，统一处理地方，比如异常处理提示
 */
requestUmi.interceptors.response.use(async (response, options) => {
  const res = await response.clone().json();

  // 200: 成功
  if (response.status === 200 && !res.errcode) {
    // 成功，则取出 data内容 直接返回
    return res;
  }

  // errcode 40100: invalid token; status 401
  else if (response.status === 401 || res.errcode === 40100) {
    history.push(loginPath);
  }

  // 40101: expired token
  // else if (res.errcode === 40101) {
  //   message.error('res.code: 40101; 自动刷新认证中');

  //   await getNewAccessToken(options.url, options).then((success) => {
  //     if (success) {
  //       console.log('Request was successful after refreshing the token.');
  //     } else {
  //       console.log('Request failed after token refresh.');
  //       // getNewAccessToken(options.url, options);
  //     }
  //   });
  // }
  else {
    console.error(
      `interceptors.response => `,
      `status:${response.status}, ` + res.errcode &&
        `errcode: ${res.errcode}, errmsg: ${res.errmsg}`,
    );

    message.warning(
      `status:${response.status}, ` + res.errcode &&
        `errcode: ${res.errcode}, errmsg: ${res.errmsg}`,
    );
  }
  return res;
});

export default request;
