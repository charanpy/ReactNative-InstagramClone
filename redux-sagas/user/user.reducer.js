import { userActionTypes } from './user.type'
import { storeData, deleteItem } from "../../helper/utils/token"



const initialState = {
     user: null,
     isAuthenticated: false,
     success: false,
     error: null,
     message: null,

     loading: null,
     isVerified: false,
     email: null,
     status: null
}

export const userReducer = (state = initialState, action) => {
     //data()
     switch (action.type) {
          case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS:
               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    status: "GetOtp"
               }


          case userActionTypes.VERIFY_CONFIRMATION_CODE_SUCCESS:


               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    status: "GetPassword"
               }


          case userActionTypes.VERIFY_CONFIRMATION_CODE_START:
          case userActionTypes.REGISTER_START:
               return {
                    ...state,
                    loading: true,
                    success: false,
                    error: null,
                    message: null,

               }
          case userActionTypes.LOGIN_START:
               return {
                    ...state,
                    loading: true,
                    success: false,
                    error: null,
                    message: null,
                    status: null
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

               return {
                    ...state,
                    loading: false,
                    success: false,
                    message: null,
                    email: null,
                    isAuthenticated: false
               }

          case userActionTypes.VERIFY_CONFIRMATION_CODE_FAILURE:

               return {
                    ...state,
                    loading: false,
                    success: false,
                    message: null,

                    isAuthenticated: false
               }


          case userActionTypes.REGISTER_FAILURE:
          case userActionTypes.LOGIN_FAILURE:
          case userActionTypes.AUTH_ERROR:
          case userActionTypes.SIGN_OUT_SUCCESS:
          case userActionTypes.SIGN_OUT_FAILURE:
               deleteItem()
               return {
                    ...state,
                    loading: false,
                    success: false,
                    message: null,
                    email: null,
                    isAuthenticated: false,
                    user: null
               }
          case userActionTypes.LOAD_USER_SUCCESS:

               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    isAuthenticated: true,
                    email: null,
                    user: action.payload
               }

          case userActionTypes.REGISTER_SUCCESS:

               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,

                    email: null,
                    status: "Registered"
               }

          case userActionTypes.LOGIN_SUCCESS:
               console.log("payload", action.payload)
               storeData(action.payload)
               return {
                    ...state,
                    success: true,
                    loading: false,
                    error: null,
                    isAuthenticated: true,
                    email: null,
               }


          case userActionTypes.SET_SUCCESS_FALSE:
               return {
                    ...state,
                    success: false
               }

          case userActionTypes.SET_STATUS_NULL:
               return {
                    ...state,
                    status: null,
                    email: null,
                    success: false,
                    message: null,
                    error: null
               }
          default:
               return state;
     }
}

