import request from 'superagent';
import Storage from '../../shared/utils/Storage';
import Action from '../IAction';
import { types, IRedirectUrl, IShowLoader, IShowToast } from './model';

export function redirectEvent(redirectUrl: string): Action<IRedirectUrl> {
  return {
    type: types.REDIRECT_URL,
    payload: {
      redirectUrl: redirectUrl
    }
  };
}

export function loaderEvent(showLoader: boolean): Action<IShowLoader> {
  return {
    type: types.SHOW_LOADER,
    payload: {
      showLoader
    }
  };
}

export function toastEvent(message: string, showToast: boolean): Action<IShowToast> {
  return {
    type: types.SHOW_TOAST,
    payload: {
      message,
      showToast
    }
  };
}
export function restlogin(route: any, reqData: any) {
  return new Promise((reslove, reject) => {
    request
      .post(route)
      .set('Content-Type', 'application/json')
      .send(reqData)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          const respData = JSON.parse(res.text);
          if (respData.status == 1) {
            Storage.setJWT(respData.jwt);
            Storage.setMenu(respData.data.menuList);
            delete respData.data.menuList;
            Storage.setUser(JSON.stringify(respData.data));
            reslove(respData.data);
          } else {
            reject(respData.error);
          }
        }
      })
  });
}

export function rest(route: any, reqData: any, isSecure:any) {
  return new Promise((reslove, reject) => {
    request
      .post(route)
      .set('Content-Type', 'application/json')
      .send(reqData)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          const respData = JSON.parse(res.text);
          if (respData.status == 1) {
            reslove(respData.data);
          } else {
            reject(respData.error);
          }
        }
      })
  });
}