import {
  takeLatest, put, call, all
} from 'redux-saga/effects';
import { PostTypes } from './Post.type';
import { askPermissionSuccess, askPermissionFailure } from './Post.actions';
import {
  getCameraRollPermission,
  askCameraRollPermission,
} from '../../helper/utils/ManagePermissions';

export function* askPermission() {
  try {
    const hasCameralRollPermission = yield call(getCameraRollPermission);
    if (!hasCameralRollPermission) {
      const isPermissionGranted = yield call(askCameraRollPermission);
      if (!isPermissionGranted) {
        yield put(askPermissionFailure());
        return;
      }
    }
    yield put(askPermissionSuccess());
  } catch (err) {
    yield put(askPermissionFailure());
  }
}

export function* onAskPermissionStart() {
  yield takeLatest(PostTypes.ASK_PERMISSION_START, askPermission);
}

export function* setMedia({ payload }) {
  yield console.log(payload);
}

export function* onSetMediaStart() {
  yield takeLatest(PostTypes.SET_MEDIA_START, setMedia);
}

export function* PostSagas() {
  yield all([call(onAskPermissionStart)]);
}
