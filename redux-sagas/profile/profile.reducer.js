import { profileActionTypes } from './profile.type';

const initialStateProfile = {
  loading: null,
  success: false,
  profile: null,
};

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        ...state,
        loading: true,
        success: false
      };

    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        profile: action.payload,
      };

    case profileActionTypes.GET_PROFILE_FAILURE:
      return {
        loading: false,
        success: false,
        profile: null,
      };

    default:
      return state;
  }
};

export default profileReducer;
