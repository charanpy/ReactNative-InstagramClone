import Media from './helper/Image';

export const initialState = {
  media: {},
  albumName: 'Instagram',
  selectedImage: [],
  albumList: [],
  modalVisible: false
};

const mediaList = (albumList) => {
  const setAlbumList = {};
  albumList.forEach((photos) => {
    setAlbumList[photos.id] = photos.uri;
  });
  return setAlbumList;
};

const setDefaultImage = (state) => {
  const getPhotos = state;
  const defaultPhoto = [getPhotos[Object.keys(getPhotos)[0]]];
  return defaultPhoto;
};

const getAllAlbumNames = (albums) => {
  const listOfAlbums = albums.map((album) => album.title);
  return listOfAlbums;
};

const setSelectedImageFromALbumName = async (album) => {
  const getAlbumName = await Media.getPhotosFromAlbum(album);
  const photoFromAlbum = await Media.photo(getAlbumName);
  return photoFromAlbum.assets;
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
        selectedImage: setDefaultImage(state.media)
      };
    case 'MODAL':
      return {
        ...state,
        modalVisible: !state.modalVisible
      };
    default:
      return state;
  }
};
