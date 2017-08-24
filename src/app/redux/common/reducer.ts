import { types, IRedirectUrl, IShowLoader, IShowToast } from './ICommonTypes';
import Action from '../IAction';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  redirectUrl: null,
  showLoader: false,
  showToast: false,
  message: ''
});

export default function common(state = initialState, action: Action<any>) {
  switch (action.payload.type) {
    case types.SHOW_TOAST:
      return Object.assign({}, state, {
        showToast: action.payload.showToast,
        message: action.payload.message
      });
    case types.SHOW_LOADER:
      return Object.assign({}, state, {
        showLoader: action.payload.showLoader
      });
    case types.REDIRECT_URL:
      return Object.assign({}, state, {
        redirectUrl: action.payload.redirectUrl
      });
    default:
      return state;
  }
}
