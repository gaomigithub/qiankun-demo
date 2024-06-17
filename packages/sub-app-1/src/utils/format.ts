// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function truncateString(str: string, len: number) {
  if (str.length < 1) {
    return '--';
  } else if (str.length <= len) {
    return str;
  } else {
    return str.substring(0, len) + '...';
  }
}

export function formatDate(dateString: string) {
  if (dateString.length < 10) {
    return '--';
  } else {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
