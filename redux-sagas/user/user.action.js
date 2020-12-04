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