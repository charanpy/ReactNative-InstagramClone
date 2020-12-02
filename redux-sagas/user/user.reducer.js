import { userActionTypes } from './user.type'

const initialState = {
     user: null,
     isAuthenticated: false,
     success: false,
     error: null,
     message: null,
     token: null,
     loading: null,
     isVerified: false
}

export const userReducer = (state = initialState, action) => {
     switch (action.type) {
          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS:
               return {
                    ...state,
                    success: action.successMessage,
                    loading: false
               }
          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START:
               return {
                    ...state,
                    loading: true
               }
          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_FAILURE:
               return {
                    ...state,
                    loading: false,
                    error: action.failureMessage
               }
          default:
               return state;
     }
}

