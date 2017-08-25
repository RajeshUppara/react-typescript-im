export const types = {
  LOGIN: 'LOGIN',
  LOGIN_RECEIVED: 'LOGIN_RECEIVED',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  SET_LOGIN_LOADING: 'SET_LOGIN_LOADING',
  SET_TOASTR_LOADING: 'SET_TOASTR_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SET_TOASTR_MESSAGE: 'SET_TOASTR_MESSAGE'
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

export type ILoginFormState = {
  email: string,
  password: string,
  loading: boolean,
  loginSuccess: boolean,
  user: Array<string>,
  showToastr: boolean,
  message: string
};


