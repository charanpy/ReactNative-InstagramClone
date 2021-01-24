import Media from './Image';

export const mediaList = (albumList) => {
  const setAlbumList = {};
  albumList.forEach((photos) => {
    setAlbumList[photos.id] = photos.uri;
  });
  return setAlbumList;
};

export const setDefaultImage = (state) => {
  const getPhotos = state;
  const defaultPhoto = [getPhotos[Object.keys(getPhotos)[0]]];
  return defaultPhoto;
};

export const getAllAlbumNames = (albums) => {
  const listOfAlbums = albums.map((album) => album.title);
  return listOfAlbums;
};

export const setSelectedImageFromALbumName = async (album) => {
  const getAlbumName = await Media.getPhotosFromAlbum(album);
  const photoFromAlbum = await Media.photo(getAlbumName);
  return photoFromAlbum.assets;
};

export const addImage = (payload, state) => {

  let updatedPhotoArray = [];
  if (!payload.multiple) {
    updatedPhotoArray = [payload.photoUri];
  } else {
    updatedPhotoArray = [...state.selectedImagesFromAlbum, payload.photoUri];
  }
  return updatedPhotoArray;
};

export const removeImage = (photoUri, state) => {
  const getAllPhotos = state.selectedImagesFromAlbum;
  const updatedPhotos = getAllPhotos.filter((uri) => uri !== photoUri);
  return updatedPhotos;
};

export const IsMultiple = (state) => {
  if (state.multiple) {
    return [];
  }
  return state.selectedImagesFromAlbum;
};
