import { userActionTypes } from './user.type'


export const sendEmailConfirmationStart = (email) => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START,
     payload: email
})

export const sendEmailConfirmationSuccess = (successMessage) => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS,
     successMessage: successMessage
})

export const sendEmailConfirmationFailure = (failureMessage) => ({
     type: userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_FAILURE,
     failureMessage: failureMessage
})