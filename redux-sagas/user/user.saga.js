import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from './user.type'
import {

     sendEmailConfirmationSuccess,
     sendEmailConfirmationFailure,
     verifyOtpFailure,
     verifyOtpSuccess,
     registerSuccess,
     registerFailure
} from './user.action';
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






const emailConfirmationApi = async ({ payload: { email } }) => {
     const config = {
          headers: {
               'Content-Type': 'application/json'
          }
     }

     const body = JSON.stringify({ email });
     console.log(body)
     return await axios.post("https://instamernclone.herokuapp.com/api/v1/users/register", body, config)


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

export function* userSagas() {
     yield all([
          call(OnEmailConfirmationStart),
          call(onVerifyOtpStart),
          call(onRegisterStart)


     ])
}