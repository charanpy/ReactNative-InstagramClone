import { profileActionTypes } from './profile.type';

export const getProfileStart = (userId) => ({
  type: profileActionTypes.GET_PROFILE_START,
  payload: userId
});

export const getProfileSuccess = (profile) => ({
  type: profileActionTypes.GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileFailure = () => ({
  type: profileActionTypes.GET_PROFILE_FAILURE,
});

export const setUserProfile = (userProfile) => ({
  type: profileActionTypes.SET_USER_PROFILE,
  payload: userProfile
});

export const setModalVisible = () => ({
  type: profileActionTypes.SET_MODAL_VISIBLE
});
