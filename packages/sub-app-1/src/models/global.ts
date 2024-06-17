// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};

export default useUser;

export const useTableSettings = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  return {
    pageSize,
    setPageSize,
  };
};
