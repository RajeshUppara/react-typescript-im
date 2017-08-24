import { types, IRedirectUrl, IShowLoader, IShowToast, ICommonState } from './model';
import Action from '../IAction';
import Immutable from 'seamless-immutable';
import { assign } from 'lodash';

const initialState: ICommonState = Immutable<ICommonState>({
  redirectUrl: '',
  showLoader: false,
  showToast: false,
  message: ''
});

export default function common(state = initialState, action: Action<any>) {
  switch (action.type) {
    case types.SHOW_TOAST:
      return assign({}, state, {
        showToast: action.payload.showToast,
        message: action.payload.message
      });
    case types.SHOW_LOADER:
      return assign({}, state, {
        showLoader: action.payload.showLoader
      });
    case types.REDIRECT_URL:
      return assign({}, state, {
        redirectUrl: action.payload.redirectUrl
      });
    default:
      return state;
  }
}
