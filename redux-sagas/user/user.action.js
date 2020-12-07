import { userActionTypes } from './user.type'


export const sendEmailConfirmationStart = (email) => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START,
     payload: email
})

export const sendEmailConfirmationSuccess = () => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS,

})

export const sendEmailConfirmationFailure = () => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_FAILURE,

})

export const verifyOtpStart = (Otp) => ({
     type: userActionTypes.VERIFY_CONFIRMATION_CODE_START,
     payload: Otp
})

export const verifyOtpSuccess = () => ({
     type: userActionTypes.VERIFY_CONFIRMATION_CODE_SUCCESS
})

export const setStatusNull = () => ({
     type: userActionTypes.SET_STATUS_NULL
})

export const verifyOtpFailure = () => ({
     type: userActionTypes.VERIFY_CONFIRMATION_CODE_FAILURE
})

export const registerStart = (password) => ({
     type: userActionTypes.REGISTER_START,
     payload: password
})

export const registerSuccess = (successMessage) => ({
     type: userActionTypes.REGISTER_SUCCESS,
     payload: successMessage
})

export const registerFailure = () => ({
     type: userActionTypes.REGISTER_SUCCESS
})


export const setSuccessFalse = () => ({
     type: userActionTypes.SET_SUCCESS_FALSE
})


export const loginStart = (emailAndPassword) => ({
     type: userActionTypes.LOGIN_START,
     payload: emailAndPassword
})

export const loginSuccess = (token) => ({
     type: userActionTypes.LOGIN_SUCCESS,
     payload: token
})

export const loginFailure = () => ({
     type: userActionTypes.LOGIN_FAILURE
})

export const loadUserStart = () => ({
     type: userActionTypes.LOAD_USER_START
})

export const loadUserSuccess = (userInfo) => ({
     type: userActionTypes.LOAD_USER_SUCCESS,
     payload: userInfo
})

export const authError = () => ({
     type: userActionTypes.AUTH_ERROR
})

export const signOutStart = () => ({
     type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
     type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = () => ({
     type: userActionTypes.SIGN_OUT_FAILURE
})
