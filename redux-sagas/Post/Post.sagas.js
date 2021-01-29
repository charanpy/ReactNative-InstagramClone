import {
  takeLatest, put, call, all
} from 'redux-saga/effects';
import { PostTypes } from './Post.type';
import { askPermissionSuccess, askPermissionFailure } from './Post.actions';
import {
  getCameraRollPermission,
  askCameraRollPermission,
} from '../../helper/utils/ManagePermissions';
import MediaLibrary from '../../helper/utils/MediaLibrary';

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

export function* getAllAlbumName() {
  try {
    const albumNames = yield call(MediaLibrary.getAlbumList);
    console.log(albumNames);
  } catch (e) {
    console.log(e);
  }
}

export function* onGetAllAlbumNamesStart() {
  yield takeLatest(PostTypes.GET_ALBUM_LIST_START, getAllAlbumName);
}

export function* PostSagas() {
  yield all([call(onAskPermissionStart), call(onGetAllAlbumNamesStart)]);
}
