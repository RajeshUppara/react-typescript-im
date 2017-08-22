import Storage from '../../shared/utils/Storage';
import { register } from '../register/actions';
import {
  API,
  ENDPOINT
} from '../../constants/api';
import {
  loaderEvent,
  toastEvent,
  redirectEvent,
  rest,
  restlogin
} from '../common/actions';
const API_URL = API.BASE_API + ENDPOINT.LOGIN_URL;

export const types = {
  USER_ACCOUNT_ID_STATE: 'USER_ACCOUNT_ID_STATE',
  PROFILE_DETAILS_STATE: 'OPEN_LICENCE_AGREEMENT_STATE',
  UPDATE_PROFILE_DETAILS_STATE: 'UPDATE_LICENCE_AGREEMENT_STATE'
};
export function setAccountId(accountId) {
  return {
    type: types.USER_ACCOUNT_ID_STATE, accountId
  }
}

export function profileDetails() {
  return {
    type: types.CANCLE_LICENCE_AGREEMENT_STATE
  }
}

export function restGetProfileDetails(accountId) {
  const reqData = {
    cmd: "profile-details",
    data: {
      id: accountId,
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      console.log("Data " + JSON.stringify(data));
      dispatch(loaderEvent(false));
      dispatch(register(data.account));
      dispatch(redirectEvent('/register/details'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}


export function restUpdateProfileDetails(data) {
  const reqData = {
    cmd: "profile-update",
    data: {

        account: {
          id: data.id,
          email: data.email,
          role: "admin",
          mobile: data.mobile
        },
        profile: {
          id: null,
          firstName: data.firstname,
          lastName: data.firstname,
          pan: data.pan,
          dob: '1984-08-19 00:00:00',
          gender: data.gender
        },
        address: {
          id: null,
          lane: data.addressline,
          street: data.street,
          city: data.city,
          state: data.state,
          country: 'IN',
          zipCode: data.postalcode
        },
        company: {
          id: null,
          name: data.businessname,
          type: data.commercialtype,
          currency: data.currency,
          tan: data.tan
        },
        image: {
          id: null,
          imgSrc: ""
        }
      
    }
  }
  return dispatch => {
    dispatch(loaderEvent(true));
    const promise = rest(API_URL, reqData, false);
    promise.then(data => {
      dispatch(loaderEvent(false));
       dispatch(redirectEvent('/menu'));
    }).catch(error => {
      dispatch(loaderEvent(false));
      dispatch(toastEvent(error.message, true));
    });
  }
}