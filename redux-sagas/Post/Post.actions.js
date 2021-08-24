import { PostTypes } from './Post.type';

export const askPermissionStart = () => ({
  type: PostTypes.ASK_PERMISSION_START,
});

export const askPermissionSuccess = () => ({
  type: PostTypes.ASK_PERMISSION_SUCCESS,
});

export const askPermissionFailure = () => ({
  type: PostTypes.ASK_PERMISSION_FAILURE,
});

export const setMediaStart = (albumName) => ({
  type: PostTypes.SET_MEDIA_START,
  payload: albumName,
});

export const setMediaSuccess = () => ({
  type: PostTypes.SET_MEDIA_SUCCESS,
});

export const setMediaFailure = () => ({
  type: PostTypes.SET_MEDIA_FAILURE,
});

export const getAllAlbumNameStart = () => ({
  type: PostTypes.GET_ALBUM_LIST_START,
});

export const getAllAlbumNameSuccess = (albumNames) => ({
  type: PostTypes.GET_ALBUM_LIST_SUCCESS,
  payload: albumNames,
});

export const getAllAlbumNameFailure = () => ({
  type: PostTypes.GET_ALBUM_LIST_FAILURE,
});

export const listAllPhotosStart = (albumName) => ({
  type: PostTypes.SET_MEDIA_START,
  payload: albumName,
});

export const listAllPhotosSuccess = (photos) => ({
  type: PostTypes.SET_MEDIA_SUCCESS,
  payload: photos,
});

export const listAllPhotosFailure = () => ({
  type: PostTypes.SET_MEDIA_FAILURE,
});

export const emptyMediaStart = () => ({
  type: PostTypes.EMPTY_MEDIA_START,
});

export const emptyMediaSuccess = () => ({
  type: PostTypes.EMPTY_MEDIA_SUCCESS,
});

export const setSelectedImageStart = (image) => ({
  type: PostTypes.SET_SELECTED_IMAGE_START,
  payload: image,
});

export const setSelectedImageSuccess = (image) => ({
  type: PostTypes.SET_SELECTED_IMAGE_SUCCESS,
  payload: image,
});

export const setMultipleSuccess = () => ({
  type: PostTypes.SET_MULTIPLE_IMAGE_SUCCESS,
});

export const setMultipleStart = () => ({
  type: PostTypes.SET_MULTIPLE_IMAGE_START,
});

export const addPostStart = (images) => ({
  type: PostTypes.ADD_POST_START,
  payload: images,
});

export const addPostSuccess = () => ({
  type: PostTypes.ADD_POST_SUCCESS,
});

export const addPostFailure = () => ({
  type: PostTypes.ADD_POST_FAILURE,
});
