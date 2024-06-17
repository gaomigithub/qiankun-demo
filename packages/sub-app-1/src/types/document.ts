
export interface IDocumentResult {
  document: IDocument;
  documentType: string;
  editorConfig: IEditorConfig;
  height: number;
  token: string;
  width: number;
  document_server_uri:string
}

export interface IDocument {
  fileType: string;
  key: string;
  permissions: IPermissions;
  title: string;
  url: string;
}

export interface IPermissions {
  chat: boolean;
  comment: boolean;
  commentGroups: any[];
  copy: boolean;
  download: boolean;
  edit: boolean;
  fillForms: boolean;
  modifyContentControl: boolean;
  modifyFilter: boolean;
  print: boolean;
  protect: boolean;
  review: boolean;
  reviewGroups: any[];
  userInfoGroups: any[];
}

export interface IEditorConfig {
  callbackUrl?: string;
  lang?: string;
  plugins?: IPlugins;
}

export interface IPlugins {
  autostart: string[];
  pluginsData: string[];
}
