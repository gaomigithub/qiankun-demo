import { ISassLoginResult } from '@/types/user';
import { api, login_api ,booleanResult, objectResult, processResult } from './_utils';
import http,  { CommonResponse }from '@/utils/http';

 export const saasLoginApi = async (username: string ='admin', password: string ='123456') => {
  console.log('login_api', login_api);
  const result = await http.post<CommonResponse<ISassLoginResult>>(
    `${login_api}/sys/mLogin`,
    { username, password}
  );

  return objectResult(result);
 }
