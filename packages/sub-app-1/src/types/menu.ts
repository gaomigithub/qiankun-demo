export interface Menu {
  id: number;
  parent_id: number;
  menu_name: string;
  path: string;
  icon?: string | null; // icon 可能是 "MessageOutlined" 或者 null
  created_by: string;
  created_time: string; // ISO 格式的时间字符串
  update_time: string; // ISO 格式的时间字符串
  enable: number; // 根据上下文，这可能表示启用状态，如 0 或 1
  is_delete: number; // 表示是否删除，0 表示未删除，1 表示已删除
  sort: number;
  children?: Menu[]; // 子菜单列表，可能为空数组
}

export interface MenuRequestResult extends Common.CommonRequestResultBase {
  result: { data: Menu[] };
}
