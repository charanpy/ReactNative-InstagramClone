import { takeLatest, put, call, all } from 'redux-saga/effects';
import { PostTypes } from './Post.type';
import PrivateApiRoute from '../../ApiRoutes/PrivateApi';
import {
  askPermissionSuccess,
  askPermissionFailure,
  getAllAlbumNameFailure,
  getAllAlbumNameSuccess,
  listAllPhotosSuccess,
  listAllPhotosFailure,
  emptyMediaSuccess,
  setSelectedImageSuccess,
  setMultipleSuccess,
  addPostFailure,
  addPostSuccess,
} from './Post.actions';
import {
  getCameraRollPermission,
  askCameraRollPermission,
} from '../../helper/utils/ManagePermissions';
import MediaLibrary from '../../helper/utils/MediaLibrary';
import { getUniqueId } from '../../helper/utils/token';
import { setAlert } from '../alert/alert.action';

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
  yield put(setSelectedImageSuccess(payload));
}

export function* onSetMediaStart() {
  yield takeLatest(PostTypes.SET_SELECTED_IMAGE_START, setMedia);
}

export function* getAllAlbumName() {
  try {
    const albumNames = yield call(MediaLibrary.getAlbumList);
    yield put(getAllAlbumNameSuccess(albumNames));
  } catch (e) {
    console.log(e);
    yield put(getAllAlbumNameFailure());
  }
}

export function* onGetAllAlbumNamesStart() {
  yield takeLatest(PostTypes.GET_ALBUM_LIST_START, getAllAlbumName);
}

export function* listPhotos({ payload }) {
  try {
    const getAlbumDetail = yield call(MediaLibrary.getAlbumDetail, payload);
    const getAllPhotos = yield call(
      MediaLibrary.getAllPhotosInAlbum,
      getAlbumDetail
    );
    yield put(listAllPhotosSuccess(getAllPhotos.assets));
  } catch (error) {
    console.log(error);
    yield put(listAllPhotosFailure());
  }
}

export function* onListPhotosStart() {
  yield takeLatest(PostTypes.SET_MEDIA_START, listPhotos);
}

export function* emptyMedia() {
  yield put(emptyMediaSuccess());
}

export function* onEmptyMediaStart() {
  yield takeLatest(PostTypes.EMPTY_MEDIA_START, emptyMedia);
}

export function* multipleImage() {
  yield put(setMultipleSuccess());
}

export function* OnSetMultipleStart() {
  yield takeLatest(PostTypes.SET_MULTIPLE_IMAGE_START, multipleImage);
}

export function* addPost({ payload: { images } }) {
  try {
    const response = yield call(
      PrivateApiRoute,
      'post/',
      images,
      'post',
      true,
      true
    );
    console.log(response);
    yield put(addPostSuccess());
    const id = getUniqueId();

    yield put(setAlert(id, 'Post created successfully'));
  } catch (error) {
    console.log(error, error.response, 222);
    const id = getUniqueId();
    yield put(addPostFailure());
    yield put(setAlert(id, 'Failed to upload Image. Please try again'));
  }
}

export function* OnAddPostStart() {
  yield takeLatest(PostTypes.ADD_POST_START, addPost);
}

export function* PostSagas() {
  yield all([
    call(onAskPermissionStart),
    call(onGetAllAlbumNamesStart),
    call(onListPhotosStart),
    call(onEmptyMediaStart),
    call(onSetMediaStart),
    call(OnSetMultipleStart),
    call(OnAddPostStart),
  ]);
}
