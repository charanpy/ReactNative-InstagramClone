import {
  takeLatest, put, all, call
} from 'redux-saga/effects';
import PrivateApiRoutes from '../../ApiRoutes/PrivateApi';
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
import { setUserProfile, emptyUpProfile } from '../profile/profile.action';
import { getUniqueId } from '../../helper/utils/token';
import { setAlert } from '../alert/alert.action';

export function* emailConfirmation(payload) {
  try {
    const {
      payload: { email },
    } = payload;
    const emailConfirmationApiResponse = yield call(
      PrivateApiRoutes,
      'users/register',
      { email },
      'post',
      false,
      false
    );
    console.log(emailConfirmationApiResponse);
    yield put(sendEmailConfirmationSuccess());
  } catch (e) {
    const id = getUniqueId();
    console.log(e, e.response);
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
    // const verifyOtpApiRes = yield call(apiRequest, { Otp }, 'confirm');
    const verifyOtpApiRes = yield call(
      PrivateApiRoutes,
      'users/confirm',
      { Otp },
      'post',
      false,
      false
    );
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
    // yield call(apiRequest, { email, password }, 'activate');
    yield call(
      PrivateApiRoutes,
      'users/activate',
      { email, password },
      'post',
      false,
      false
    );
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

export function* loadUser() {
  try {
    const response = yield call(
      PrivateApiRoutes,
      'users/me',
      null,
      'get',
      true,
      false
    );
    yield put(loadUserSuccess(response.data.profile));
    yield put(setUserProfile(response.data.profile));
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
    const response = yield call(
      PrivateApiRoutes,
      'users/login',
      { email, password },
      'post',
      false,
      false
    );
    yield put(loginSuccess(response.data.data.token));
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
    yield put(emptyUpProfile());
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

// const emailConfirmationApiResponse = yield call(
//       apiRequest,
//       { email },
//       'register'
//     );

// const apiRequest = async (bodyOfRequest, url) => {
//   console.log(bodyOfRequest, url);

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   const body = JSON.stringify(bodyOfRequest);
//   console.log(body);
//   const response = await axios.post(
//     `https://instamernclone.herokuapp.com/api/v1/users/${url}`,
//     body,
//     config
//   );
//   return response;
// };
