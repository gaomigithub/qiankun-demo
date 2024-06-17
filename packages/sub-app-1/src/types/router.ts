export interface IRouteDto {
  enable: number;
  id: number;
  menu_name?: string;
  parent_id?: number;
  path?: string;
  sort?: number;
  icon?: string | null; // icon 可能是 "MessageOutlined" 或者 null
  children?: IRouteDto[];
}
