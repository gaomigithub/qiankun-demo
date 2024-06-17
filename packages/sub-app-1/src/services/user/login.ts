import { ILoginRequest } from '@/types/user';
import request from '@/utils/globalRequest';

export async function loginApi(body: ILoginRequest) {
  return request<{ access_token: string }>(`/api/v1/security/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
