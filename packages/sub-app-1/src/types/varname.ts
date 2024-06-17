export interface IVarnameConfig {
  "column_type": string,
  "id": number,
  "label": string,
  "value": string,
  "varname": string
}

export interface IVarnameUpdateDto {
  "report_id":number,
  "varname": string,
  "varname_value": number | string
}

export interface BaseDefinition {
  column_type: string;
  create_by: string;
  created_on: string;
  id: number;
  is_delete: number;
  label: string;
  updated_on: string;
  varname: string;
  varname_default_value: string;
}

export interface ConditionExpression {
  column: string;
  opt: string;
  value: string | { varname: string; varname_id: number };
}

export interface Converter {
  pattern: string;
  spec?: string;
}

export interface DataDefinition {
  condit_expr: ConditionExpression[];
  db_origin_id: number;
  query_mode: string;
  valueas: {
      column: string;
      converter: Converter;
  };
}

export interface APIParam {
  param_name: string;
  param_value: string;
}

export interface APIDefinition {
  api_origin_id: number;
  params: APIParam[];
  valueas: {
      column: string;
      converter: Converter;
  };
}

export interface FillInDefinition {
  has_multi_line: boolean;
  value: string;
  value_type: string;
}

export interface LLMDefinition {
  prompt: string;
}

export interface MergedDefinition extends BaseDefinition {
  varname_definition_json: DataDefinition | APIDefinition | FillInDefinition | LLMDefinition;
  varname_type: "Data" | "API" | "FillIn" | "LLM";
}