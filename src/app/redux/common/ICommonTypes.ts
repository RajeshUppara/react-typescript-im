export const types = {
  SHOW_TOAST: 'SHOW_TOAST',
  SHOW_LOADER: 'SHOW_LOADER',
  REDIRECT_URL: 'REDIRECT_URL',
};

export type IRedirectUrl = { type: string, redirectUrl: string };
export type IShowLoader = { type: string, showLoader: boolean };
export type IShowToast = { type: string, message: string, showToast: boolean };


