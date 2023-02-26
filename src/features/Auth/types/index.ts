export type LoginData = {
  email: string;
  password: string;
};

export type AuthUser = {
  success: boolean;
  role: string;
  token: string;
};
