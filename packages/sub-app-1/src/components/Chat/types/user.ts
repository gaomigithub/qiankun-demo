

export interface ISassLoginResult {
  token: string;
  userInfo: IUserInfo;
}

export interface IUserInfo {
  id: string;
  username: string;
  realname: string;
  avatar: string;
  birthday: string;
  sex: number;
  email: string;
  phone: string;
  orgCode: string;
  loginTenantId: number;
  orgCodeTxt: string | null;
  status: number;
  delFlag: number;
  workNo: string;
  post: string;
  telephone: string | null;
  createBy: string | null;
  createTime: string;
  updateBy: string;
  updateTime: string;
  activitiSync: number;
  userIdentity: number;
  departIds: string;
  relTenantIds: string;
  clientId: string | null;
  homePath: string | null;
  postText: string | null;
  bpmStatus: string | null;
}


