export const API_URL = process.env
  .NEXT_PUBLIC_API_URL as string;
export const IS_DEVELOPMENT =
  process.env.NODE_ENV === 'development';
export const IS_PRODUCTION =
  process.env.NODE_ENV === 'production';

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';
