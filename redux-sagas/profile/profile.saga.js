import {
  takeLatest, put, all, call
} from 'redux-saga/effects';
import axios from 'axios';
import { profileActionTypes } from './profile.type';
import { getData, getUniqueId } from '../../helper/utils/token';
import { setAlert } from '../alert/alert.action';
import {
  getProfileFailure,
  getProfileSuccess
} from './profile.action';

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

export function* profileSagas() {
  yield all([call(onGetProfileStart)]);
}
