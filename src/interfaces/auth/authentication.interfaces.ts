export interface UserIdentity {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  birthdate: string;
  language: number;
  profilePhotoPath: string | null;
  role: string;
}

export interface LoginResponseData {
  token: string;
  refreshToken: string;
  refreshTokenExpireTime: string;
  userData: UserIdentity;
}
