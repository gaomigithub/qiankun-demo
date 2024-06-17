

export  const setTokenToCookie = (token: string, key = 'X-Access-Token', expires = 365) => {
  // 设置 cookie 的过期时间
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expires);

  // 构造 cookie 字符串
  const cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(token)}; expires=${expirationDate.toUTCString()}; path=/`;

  // 设置 cookie
  document.cookie = cookieString;
};
