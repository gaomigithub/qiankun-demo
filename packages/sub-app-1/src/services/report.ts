import { IChapter } from '@/types/exportWord';
import { IVarnameConfig, IVarnameUpdateDto } from '@/types/varname';
import http, { CommonResponse } from '@/utils/adaHttp/index';

import request from '@/utils/globalRequest';
import { booleanResult, objectResult } from './_utils';

/**
 * 导出word文档 #160583938
 * @param data 文档树
 * @returns
 */
export async function exportWordApi(data: IChapter[]) {
  return request(`/api/v1/ask4insight/generate_word`, {
    method: 'POST',
    headers: {
      Accept: '*/*',
    },
    responseType: 'blob',
    data: data,
  });
}

/**
 * 导出word模板文档 161323688
 * @param data
 * @returns
 */
export async function exportWordTempApi(data: IChapter[]) {
  return request(`/api/v1/ask4insight/generate_template_word`, {
    method: 'POST',
    headers: {
      Accept: '*/*',
    },
    responseType: 'blob',
    data: data,
  });
}

/**
 * 根据模板创建报告
 * @param data
 * @returns
 */
export async function createReportByTemplate(data: {
  origin_mode: string;
  origin_value: number;
}) {
  return request(`/api/v1/report/create`, {
    method: 'POST',
    headers: {
      Accept: '*/*',
    },
    data: data,
  });
}

export async function officeConfigApi(params: {
  origin_mode: string;
  origin_value: number;
  action: 'view' | 'edit' | 'vieworigin';
}) {
  return request(`/api/v1/office/config`, {
    method: 'Get',
    headers: {
      Accept: '*/*',
    },
    params: params,
  });
}

export async function updateTemplateTitle(id: string, title: string) {
  return request(`/api/v1/report/template/edit`, {
    method: 'Put',
    data: {
      template_id: id,
      template_name: title,
    },
  });
}

export async function updateReportTitle(id: string, title: string) {
  return request(`/api/v1/report/edit`, {
    method: 'Put',
    data: {
      report_id: id,
      report_name: title,
    },
  });
}

export async function getReportDetailById(id: string) {
  return request(`/api/v1/report/detail?report_id=${id}`, {
    method: 'Get',
  });
}

export async function getTmpDetailById(id: string) {
  return request(`/api/v1/report/template/detail?template_id=${id}`, {
    method: 'Get',
  });
}

export const saveVarnameConfigApi = async (data: IVarnameUpdateDto) => {
  const result = await http.put(`/api/v1/report/varname/update-value`, data);
  return booleanResult(result);
};

export const getVarnameConfigsApi = async (report_id: string) => {
  const result = await http.get<CommonResponse<IVarnameConfig[]>>(
    `/api/v1/report/varname/list?report_id=${report_id}`,
  );
  return objectResult(result);
};

export const renderOfficeApi = async (report_id: string) => {
  const result = await http.post<
    CommonResponse<{ docx_id?: number; report_id?: number }>
  >(`/api/v1/report/render`, {
    report_id,
  });

  return objectResult(result);
};
