import request from 'superagent';
import Storage from '../../shared/utils/Storage';
import Action from '../IAction';
import { types, IRedirectUrl, IShowLoader, IShowToast } from './ICommonTypes';

export function redirectEvent(redirectUrl: string): Action<IRedirectUrl> {
  return {
    type: types.REDIRECT_URL,
    payload: {
      type: types.REDIRECT_URL,
      redirectUrl: redirectUrl
    }
  };
}

export function loaderEvent(showLoader: boolean): Action<IShowLoader> {
  return {
    type: types.SHOW_LOADER,
    payload: {
      type: types.SHOW_LOADER,
      showLoader
    }
  };
}

export function toastEvent(message: string, showToast: boolean): Action<IShowToast> {
  return {
    type: types.SHOW_TOAST,
    payload: {
      type: types.SHOW_TOAST,
      message,
      showToast
    }
  };
}
export function restlogin(route, reqData) {
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

export function rest(route, reqData, isSecure) {
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