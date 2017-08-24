export const types = {
  SHOW_TOAST: 'SHOW_TOAST',
  SHOW_LOADER: 'SHOW_LOADER',
  REDIRECT_URL: 'REDIRECT_URL',
};

export type IRedirectUrl = { 
  redirectUrl: string 
};
export type IShowLoader = { 
  showLoader: boolean 
};
export type IShowToast = { 
  message: string, 
  showToast: boolean 
};

export type ICommonState = {
  redirectUrl: string,
  showLoader: boolean,
  showToast: boolean,
  message: string
};


