import { profileActionTypes } from './profile.type';

const initialStateProfile = {
  loading: null,
  success: false,
  profile: null,
  userProfile: null,
  updateImageUri: null,
  modal: false
};

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        loading: true,
        success: false,
        profile: null,
        userProfile: null,
        updateImageUri: null
      };

    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        profile: action.payload,
      };

    case profileActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        profile: null,
      };

    case profileActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    case profileActionTypes.SET_MODAL_VISIBLE:
      return {
        ...state,
        modal: !state.modal
      };
    default:
      return state;
  }
};

export default profileReducer;
