import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './user.type'
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
     signOutFailure
} from './user.action';
import { getData } from '../../helper/utils/token'
import setAuthToken from '../../helper/utils/setAuthToken'
import { setAlert } from "../alert/alert.action";

import axios from 'axios'


const apiRequest = async (bodyOfRequest, url) => {
     console.log(bodyOfRequest, url)

     const config = {
          headers: {
               'Content-Type': 'application/json'
          }
     }

     const body = JSON.stringify(bodyOfRequest);
     console.log(body)
     return await axios.post(`https://instamernclone.herokuapp.com/api/v1/users/${url}`, body, config)


}



export function* emailConfirmation(payload) {
     try {
          const { payload: { email } } = payload
          const emailConfirmationApiResponse = yield call(apiRequest, { email }, "register")
          console.log(emailConfirmationApiResponse)
          yield put(sendEmailConfirmationSuccess())
     } catch (e) {
          const id = parseInt(Math.random() * 1000)
          console.log(id)
          yield put(sendEmailConfirmationFailure(e.response.data.message))
          yield put(setAlert(id, e.response.data.message))

     }
}

export function* OnEmailConfirmationStart() {
     yield takeLatest(userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START, emailConfirmation)
}




export function* verifyOtp(payload) {
     try {

          const { payload: { Otp } } = payload;
          const verifyOtpApiRes = yield call(apiRequest, { Otp: Otp }, 'confirm')
          console.log(verifyOtpApiRes)
          yield put(verifyOtpSuccess())
     } catch (error) {
          const id = parseInt(Math.random() * 1000)

          console.log(error, error.response.data)
          yield put(verifyOtpFailure())
          yield put(setAlert(id, error.response.data.message))

     }
}


export function* onVerifyOtpStart() {
     yield takeLatest(userActionTypes.VERIFY_CONFIRMATION_CODE_START, verifyOtp)
}


export function* registerAccount(payload) {
     try {
          console.log(payload)
          const { payload: { email, password } } = payload;
          yield call(apiRequest, { email, password }, 'activate')
          yield put(registerSuccess())
     } catch (e) {
          const id = parseInt(Math.random() * 1000)

          console.log(e, e.response.data)
          yield put(registerFailure())
          yield put(setAlert(id, e.response.data.message))

     }
}


export function* onRegisterStart() {
     yield takeLatest(userActionTypes.REGISTER_START, registerAccount)
}

const dat = async () => {
     getData().then((res) => {
          setAuthToken(res)
     })
}

const loadUserApi = async () => {
     dat();

     return getData().then(async (res) => {

          let config = {
               headers: {
                    'Authorization': 'Bearer ' + res
               }
          }
          return await axios.get("https://instamernclone.herokuapp.com/api/v1/users/me", config);
     })
}

export function* loadUser() {
     try {
          const res = yield call(loadUserApi)
          const { _id: profileId, username, user: userId } = res.data.profile;
          const userInfo = {
               profileId,
               username,
               userId
          }
          yield put(loadUserSuccess(userInfo))

     } catch (e) {
          console.log(e, e.response)
          yield put(authError())
     }
}

export function* onLoadUserStart() {
     yield takeLatest(userActionTypes.LOAD_USER_START, loadUser)
}


export function* onLogin(payload) {
     try {
          console.log(payload)
          const { payload: { email, password } } = payload;
          const res = yield call(apiRequest, { email, password }, 'login')
          yield put(loginSuccess(res.data.data.token))

     } catch (e) {
          const id = parseInt(Math.random() * 1000)

          console.log(e)
          yield put(loginFailure())
          yield put(setAlert(id, e.response.data.message))
     }

}

export function* onLoginStart() {
     yield takeLatest(userActionTypes.LOGIN_START, onLogin)

}

export function* onSignOut() {
     try {
          yield put(signOutSuccess())
     } catch (e) {
          yield put(signOutFailure())
     }
}

export function* onSignOutStart() {
     yield takeLatest(userActionTypes.SIGN_OUT_START, onSignOut)
}


export function* userSagas() {
     yield all([
          call(OnEmailConfirmationStart),
          call(onVerifyOtpStart),
          call(onRegisterStart),
          call(onLoginStart),
          call(onLoadUserStart),
          call(onSignOutStart)


     ])
}