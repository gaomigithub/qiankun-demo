

// 工具函数。获取url字符串中携带的参数，以key,value对象形式返回。
function getURLParameters(url) {
  let params = {};
  let queryString = url.split('?')[1];
  if (queryString) {
    let searchParams = new URLSearchParams(queryString);
    for (let param of searchParams.entries()) {
      params[param[0]] = param[1];
    }
  }
  return params;
}