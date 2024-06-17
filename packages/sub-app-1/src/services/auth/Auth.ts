import { Menu, MenuRequestResult } from '@/types/menu';
import request from '@/utils/globalRequest';

export async function menuList(): Promise<Menu[]> {
  const res = await request<MenuRequestResult>('/api/v1/menu/menu/list', {
    method: 'GET',
  });

  return res.result.data;
}
