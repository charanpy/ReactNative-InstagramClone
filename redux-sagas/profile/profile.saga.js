import {
  takeLatest, put, all, call
} from 'redux-saga/effects';
import axios from 'axios';
import { profileActionTypes } from './profile.type';
import { getData, getUniqueId } from '../../helper/utils/token';
import { setAlert } from '../alert/alert.action';
import {
  getProfileFailure, getProfileSuccess, uploadImageSuccess, uploadImageFailure,
  editProfileSuccess, editProfileFailure
} from './profile.action';
// import { getData, getUniqueId } from '../../helper/utils/token';

const getProfileApiRequest = async (userId) => {
  return getData().then(async (res) => {
    const config = {
      headers: {
        Authorization: `Bearer ${res}`,
      },
    };
    const response = await axios.get(
      `https://instamernclone.herokuapp.com/api/v1/profile/${userId}`,
      config
    );
    return response;
  });
};

export function* getProfile(userId) {
  try {
    const { payload } = userId;
    const profileApiResponse = yield call(getProfileApiRequest, payload);
    // console.log(profileApiResponse.data);
    yield put(getProfileSuccess(profileApiResponse.data.data.profile));
  } catch (e) {
    console.log(e.response.message);
    const id = getUniqueId();
    yield put(getProfileFailure());
    yield put(setAlert(id, e.response.data.message));
  }
}

export function* onGetProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfile);
}

const uploadImageApi = async (data, type) => {
  const file = data;
  const request = (type === 'upload' && axios.post) || axios.put;
  return getData().then(async (res) => {
    const response = await request(
      'https://instamernclone.herokuapp.com/api/v1/profile/profile-photo/',
      file,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${res}`,
        },
      }
    );
    return response;
  });
};

export function* uploadImage({ payload }) {
  try {
    const { data, type } = payload.data;
    const response = yield call(uploadImageApi, data, type);
    yield put(
      uploadImageSuccess(
        response.data.profile.photo.secure_url
      )
    );
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

const editProfileApi = async (data) => {
  console.log(12, data);
  const body = JSON.stringify(data);
  return getData().then(async (res) => {
    const response = await axios.put(
      'https://instamernclone.herokuapp.com/api/v1/profile/',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${res}`,
        },
      }
    );
    return response;
  });
};

export function* editProfile({ payload }) {
  try {
    const { label, value } = payload;
    console.log(label, 100, payload);
    const labelText = label.toLowerCase();
    const body = {
      [labelText]: value
    };
    const res = yield call(editProfileApi, body);
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
  yield all([call(onGetProfileStart), call(onUploadImageStart), call(onEditProfileStart)]);
}
