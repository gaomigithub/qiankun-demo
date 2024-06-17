import request from '@/utils/globalRequest';

export async function queryList(
  params: Common.CommonQueryParams,
  options?: { [key: string]: any },
): Promise<ServiceManagement.ServicePageTableInfo> {
  const res = await request<
    Common.CommonQueryListResult<ServiceManagement.ServiceInfo>
  >('/api/v1/metabase/accessservice/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });

  return {
    data: res.result!.data,
    success: res.success,
    total: res.result!.total,
  };
}

export async function createSerivce(
  body: ServiceManagement.ServiceCreateInfo,
  options?: { [key: string]: any },
): Promise<Common.CommonCreateResult> {
  return request('/api/v1/metabase/accessservice/create', {
    method: 'POST',
    headers: {},
    data: body,
    ...(options || {}),
  });
}

export async function getUserDetail(params: { id: number }) {
  const res = await request<
    Common.CommonGetDetailResult<ServiceManagement.ServiceInfo>
  >('/api/v1/metabase/accessservice/list', {
    method: 'GET',
    params: {
      ...params,
    },
  });

  return res.result!.data ?? {};
}

export async function updateService(
  body?: ServiceManagement.ServiceUpdateInfo,
  options?: { [key: string]: any },
) {
  return request<
    Common.CommonUpdateResult<ServiceManagement.ServiceUpdateInfo>
  >(`/api/v1/metabase/accessservice/edit`, {
    method: 'PUT',
    headers: {
      // 'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteService(
  body: {
    ids: number[];
  },
  options?: { [key: string]: any },
) {
  return request<Common.CommonDeleteResult>(
    `/api/v1/metabase/accessservice/delete`,
    {
      method: 'DELETE',
      data: body,
      ...(options || {}),
    },
  );
}
