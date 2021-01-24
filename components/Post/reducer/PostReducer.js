import {
  mediaList,
  setDefaultImage,
  setSelectedImageFromALbumName,
  addImage,
  removeImage,
  IsMultiple,
  getAllAlbumNames,
} from '../helper/PostController';

export const initialState = {
  media: {},
  albumName: 'Instagram',
  selectedImage: [],
  albumList: [],
  modalVisible: false,
  multiple: false,
  selectedImagesFromAlbum: [],
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUM_LIST':
      return {
        ...state,
        albumList: getAllAlbumNames(action.payload),
      };
    case 'SET_MEDIA':
      return {
        ...state,
        media: mediaList(action.payload),
      };
    case 'DEFAULT_IMAGE':
      return {
        ...state,
        selectedImage: setDefaultImage(state.media),
      };
    case 'SET_ALBUM_NAME':
      return {
        ...state,
        albumName: action.payload,
        media: setSelectedImageFromALbumName(action.payload),
        selectedImage: setDefaultImage(state.media),
      };
    case 'MODAL':
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
    case 'EMPTY':
      return initialState;
    case 'SET_MULTIPLE_IMAGE':
      return {
        ...state,
        multiple: !state.multiple,
        selectedImagesFromAlbum: IsMultiple(state)
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        multiple: action.payload.multiple,
        selectedImagesFromAlbum: addImage(action.payload, state)
      };
    case 'REMOVE_IMAGE':
      return {
        ...state,
        selectedImagesFromAlbum: removeImage(action.payload, state),
      };
    default:
      return state;
  }
};
