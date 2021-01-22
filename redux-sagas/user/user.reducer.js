import { userActionTypes } from './user.type';
import { storeData, deleteItem } from '../../helper/utils/token';

const initialState = {
  user: null,
  isAuthenticated: false,
  success: false,
  loading: false,
  isVerified: false,
  email: null,
  status: null,
};

const userReducer = (state = initialState, action) => {
  // data()
  switch (action.type) {
    case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        status: 'GetOtp',
      };

    case userActionTypes.VERIFY_CONFIRMATION_CODE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        status: 'GetPassword',
      };

    case userActionTypes.VERIFY_CONFIRMATION_CODE_START:
    case userActionTypes.REGISTER_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case userActionTypes.LOGIN_START:
    case userActionTypes.LOAD_USER_START:
      return {
        ...state,
        loading: true,
        success: false,
        status: null,
      };

    case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_START:
      return {
        ...state,
        loading: true,
        success: false,
        email: action.payload.email,
      };

    case userActionTypes.SEND_EMAIL_CONFIRMATION_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        email: null,
        isAuthenticated: false,
      };

    case userActionTypes.VERIFY_CONFIRMATION_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        isAuthenticated: false,
      };

    case userActionTypes.REGISTER_FAILURE:
    case userActionTypes.LOGIN_FAILURE:
    case userActionTypes.AUTH_ERROR:
    case userActionTypes.SIGN_OUT_SUCCESS:
    case userActionTypes.SIGN_OUT_FAILURE:
      deleteItem();
      return {
        ...state,
        loading: false,
        success: false,
        email: null,
        isAuthenticated: false,
        user: null,
      };
    case userActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        isAuthenticated: true,
        email: null,
        user: action.payload,
      };

    case userActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        email: null,
        status: 'Registered',
      };

    case userActionTypes.LOGIN_SUCCESS:
      console.log('payload', action.payload);
      storeData(action.payload);
      return {
        ...state,
        success: true,
        loading: false,
        isAuthenticated: true,
        email: null,
      };

    case userActionTypes.SET_SUCCESS_FALSE:
      return {
        ...state,
        success: false,
      };

    case userActionTypes.SET_STATUS_NULL:
      return {
        ...state,
        status: null,
        email: null,
        success: false,
      };
    default:
      return state;
  }
};

export default userReducer;
