import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { userActionTypes } from './user.type';
import {
  sendEmailConfirmationSuccess,
  sendEmailConfirmationFailure,
  verifyOtpFailure,
  verifyOtpSuccess,
  registerSuccess,
  registerFailure,
  loginFailure,
  loginSuccess,
  loadUserSuccess,
  authError,
  signOutSuccess,
  signOutFailure,
} from './user.action';
import { getData, getUniqueId } from '../../helper/utils/token';
import setAuthToken from '../../helper/utils/setAuthToken';
import { setAlert } from '../alert/alert.action';

const apiRequest = async (bodyOfRequest, url) => {
  console.log(bodyOfRequest, url);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(bodyOfRequest);
  console.log(body);
  const response = await axios.post(
    `https://instamernclone.herokuapp.com/api/v1/users/${url}`,
    body,
    config
  );
  return response;
};

export function* emailConfirmation(payload) {
  try {
    const {
      payload: { email },
    } = payload;
    const emailConfirmationApiResponse = yield call(
      apiRequest,
      { email },
      'register'
    );
    console.log(emailConfirmationApiResponse);
    yield put(sendEmailConfirmationSuccess());
  } catch (e) {
    const id = getUniqueId();
    console.log(id);
    yield put(sendEmailConfirmationFailure(e.response.data.message));
    yield put(setAlert(id, e.response.data.message));
  }
}

export function* OnEmailConfirmationStart() {
  yield takeLatest(
    userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START,
    emailConfirmation
  );
}

export function* verifyOtp(payload) {
  try {
    const {
      payload: { Otp },
    } = payload;
    const verifyOtpApiRes = yield call(apiRequest, { Otp }, 'confirm');
    console.log(verifyOtpApiRes);
    yield put(verifyOtpSuccess());
  } catch (error) {
    const id = getUniqueId();
    console.log(id);
    console.log(error, error.response.data);
    yield put(verifyOtpFailure());
    yield put(setAlert(id, error.response.data.message));
  }
}

export function* onVerifyOtpStart() {
  yield takeLatest(userActionTypes.VERIFY_CONFIRMATION_CODE_START, verifyOtp);
}

export function* registerAccount(payload) {
  try {
    console.log(payload);
    const {
      payload: { email, password },
    } = payload;
    yield call(apiRequest, { email, password }, 'activate');
    yield put(registerSuccess());
  } catch (e) {
    const id = getUniqueId();
    console.log(id);
    console.log(e, e.response.data);
    yield put(registerFailure());
    yield put(setAlert(id, e.response.data.message));
  }
}

export function* onRegisterStart() {
  yield takeLatest(userActionTypes.REGISTER_START, registerAccount);
}

const dat = async () => {
  getData().then((res) => {
    setAuthToken(res);
  });
};

const loadUserApi = async (url, id = null) => {
  dat();

  return getData().then(async (res) => {
    const apiUrl = id
      ? `https://instamernclone.herokuapp.com/api/v1/${url}/${id}`
      : `https://instamernclone.herokuapp.com/api/v1/${url}`;
    const config = {
      headers: {
        Authorization: `Bearer ${res}`,
      },
    };
    const response = await axios.get(apiUrl, config);
    return response;
  });
};

export function* loadUser() {
  try {
    const getProfileId = yield call(loadUserApi, 'users/me');
    console.log(getProfileId);
    const { _id: profileId } = getProfileId.data.profile;
    const getProfile = yield call(loadUserApi, `profile/${profileId}`);
    console.log(getProfile);
    yield put(loadUserSuccess(getProfile.data.data.profile));
  } catch (e) {
    console.log(e, e.response);
    yield put(authError());
  }
}

export function* onLoadUserStart() {
  yield takeLatest(userActionTypes.LOAD_USER_START, loadUser);
}

export function* onLogin(payload) {
  try {
    console.log(payload);
    const {
      payload: { email, password },
    } = payload;
    const res = yield call(apiRequest, { email, password }, 'login');
    yield put(loginSuccess(res.data.data.token));
  } catch (e) {
    const id = getUniqueId();
    console.log(e, id);
    yield put(loginFailure());
    yield put(setAlert(id, e.response.data.message));
  }
}

export function* onLoginStart() {
  yield takeLatest(userActionTypes.LOGIN_START, onLogin);
}

export function* onSignOut() {
  try {
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure());
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, onSignOut);
}

export function* userSagas() {
  yield all([
    call(OnEmailConfirmationStart),
    call(onVerifyOtpStart),
    call(onRegisterStart),
    call(onLoginStart),
    call(onLoadUserStart),
    call(onSignOutStart),
  ]);
}
