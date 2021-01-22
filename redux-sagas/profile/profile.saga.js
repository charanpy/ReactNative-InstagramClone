import {
  takeLatest, put, all, call
} from 'redux-saga/effects';
// import axios from 'axios';
import { profileActionTypes } from './profile.type';
import { getUniqueId } from '../../helper/utils/token';
import { setAlert } from '../alert/alert.action';
import {
  // getProfileFailure,
  // getProfileSuccess,
  uploadImageSuccess,
  uploadImageFailure,
  editProfileSuccess,
  editProfileFailure,
} from './profile.action';
// import { getData, getUniqueId } from '../../helper/utils/token';
import PrivateApiRoute from '../../ApiRoutes/PrivateApi';

export function* uploadImage({ payload }) {
  try {
    const { data, type } = payload.data;
    const requestMethod = (type === 'upload' && 'post') || 'put';
    const response = yield call(
      PrivateApiRoute,
      'profile/profile-photo/',
      data,
      requestMethod,
      true,
      true
    );
    console.log(response);
    yield put(uploadImageSuccess(response.data.profile.photo.secure_url));
  } catch (error) {
    console.log(error, error.response);
    const id = getUniqueId();
    yield put(uploadImageFailure());
    yield put(setAlert(id, 'Failed to upload Image. Please try again'));
  }
}

export function* onUploadImageStart() {
  yield takeLatest(profileActionTypes.UPLOAD_IMAGE_START, uploadImage);
}

export function* editProfile({ payload }) {
  try {
    const { label, value } = payload;
    const labelText = label.toLowerCase();
    const body = {
      [labelText]: value,
    };
    const res = yield call(
      PrivateApiRoute,
      'profile/',
      body,
      'put',
      true,
      false
    );
    console.log(res);
    yield put(editProfileSuccess(labelText, value));
  } catch (error) {
    console.log(error, error.response);
    yield put(editProfileFailure());
  }
}

export function* onEditProfileStart() {
  yield takeLatest(profileActionTypes.EDIT_PROFILE_START, editProfile);
}

export function* profileSagas() {
  yield all([
    // call(onGetProfileStart),
    call(onUploadImageStart),
    call(onEditProfileStart),
  ]);
}

// const getProfileApiRequest = async (userId) => {
//   return getData().then(async (res) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${res}`,
//       },
//     };
//     const response = await axios.get(
//       `https://instamernclone.herokuapp.com/api/v1/profile/${userId}`,
//       config
//     );
//     return response;
//   });
// };

// export function* getProfile(userId) {
//   try {
//     const { payload } = userId;
//     const profileApiResponse = yield call(getProfileApiRequest, payload);
//     // console.log(profileApiResponse.data);
//     yield put(getProfileSuccess(profileApiResponse.data.data.profile));
//   } catch (e) {
//     console.log(e.response.message);
//     const id = getUniqueId();
//     yield put(getProfileFailure());
//     yield put(setAlert(id, e.response.data.message));
//   }
// }

// export function* onGetProfileStart() {
//   yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfile);
// }
