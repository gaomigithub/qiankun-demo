declare namespace ServiceManagement {
  interface ServiceCreateInfo {
    label: string;
    api_uri: string;
    params: string[];
  }

  interface ServiceUpdateInfo {
    id: number;
    label: string;
    api_uri: string;
    params: string[];
  }

  interface ServiceInfo extends ServiceCreateInfo {
    id: number;
    // create_by: string;
    created_on: string;
    updated_on?: string;
    // desc: string;
    is_delete: number;
  }

  interface ServicePageTableInfo {
    data: ServiceInfo[];
    success: boolean;
    total: number;
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

  interface PageInfo {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_UserInfo_ {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  type definitions_0 = null;
}
