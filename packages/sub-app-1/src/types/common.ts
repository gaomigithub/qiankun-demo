// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Common {
  interface CommonRequestResultBase {
    message: string;
    request_id: string;
    status: number;
    success: boolean;
    timestamp: number;
    err_details?: string | null;
  }

  interface LoginResult {
    result: {
      access_expires: number;
      access_token: string;
      refresh_expires: number;
      refresh_token: string;
    };
    isAutoLogin?: any;
  }
  interface Login extends CommonRequestResultBase, LoginResult {}

  interface RefreshTokenResult {
    result: {
      access_expires: number;
      access_token: string;
    };
  }
  interface RefreshToken extends CommonRequestResultBase, LoginResult {}

  interface QueryListResult<T> {
    result: { data: T[]; pages: number; total: number };
  }

  interface CreateResult {
    result: null;
  }

  interface ReadResult<T> {
    result: { data: T; pages: number; total: number };
  }

  interface UpdateResult<T> {
    result: T;
  }

  interface DeleteResult {
    result: null;
  }

  interface CommonQueryListResult<T>
    extends CommonRequestResultBase,
      QueryListResult<T> {}

  interface CommonGetDetailResult<T>
    extends CommonRequestResultBase,
      ReadResult<T> {}

  interface CommonCreateResult extends CommonRequestResultBase, CreateResult {}
  interface CommonUpdateResult<T>
    extends CommonRequestResultBase,
      UpdateResult<T> {}
  interface CommonDeleteResult extends CommonRequestResultBase, DeleteResult {}

  interface CommonQueryParams {
    label?: string;
    page: number;
    page_size: number;
  }

  type SortOrder = 'descend' | 'ascend' | null;

  type ProTableRequest<T> = (
    params: { pageSize: number; current: number },
    sort?: Record<string, SortOrder>,
    filter?: { [key: string]: any },
  ) => Promise<{
    data: T[];
    success: boolean;
    total: number;
  }>;
}
