import { userActionTypes } from './user.type'

const initialState = {
     user: null,
     isAuthenticated: false,
     success: false,
     error: null,
     message: null,
     token: null,
     loading: null,
     isVerified: false,
     email: null
}

export const userReducer = (state = initialState, action) => {
     switch (action.type) {
          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS:
               //case userActionTypes.VERIFY_CONFIRMATION_CODE_SUCCESS:
               // case userActionTypes.REGISTER_SUCCESS:
               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null
               }


          case userActionTypes.VERIFY_CONFIRMATION_CODE_SUCCESS:


               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    isVerified: true
               }


          case userActionTypes.VERIFY_CONFIRMATION_CODE_START:
          case userActionTypes.REGISTER_START:
               return {
                    ...state,
                    loading: true,
                    success: false,
                    error: null,
                    message: null
               }

          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START:
               return {
                    ...state,
                    loading: true,
                    success: false,
                    error: null,
                    message: null,
                    email: action.payload.email
               }

          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_FAILURE:
          case userActionTypes.VERIFY_CONFIRMATION_CODE_FAILURE:
          case userActionTypes.REGISTER_FAILURE:

               return {
                    ...state,
                    loading: false,
                    success: false,
                    message: null,
                    email: null
               }

          case userActionTypes.REGISTER_SUCCESS:

               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    //isVerified: false,
                    email: null
               }






          case userActionTypes.SET_SUCCESS_FALSE:
               return {
                    ...state,
                    success: false
               }
          default:
               return state;
     }
}

