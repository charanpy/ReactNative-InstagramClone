import { createContext } from 'react';
import * as MediaLibrary from 'expo-media-library';

export const PostContext = createContext(null);

const getAlbumList = async () => {
  const getAlbum = await MediaLibrary.getAlbumsAsync();
  return getAlbum;
};

const getPhotosFromAlbum = async (albumName) => {
  const getPhotos = await MediaLibrary.getAlbumAsync(albumName);
  return getPhotos;
};

const photo = async (getAlbums) => {
  const getAllPhotos = await MediaLibrary.getAssetsAsync({
    first: 20,
    album: getAlbums,
    sortBy: ['creationTime'],
    mediaType: ['photo', 'video'],
  });
  return getAllPhotos;
};

export default {
  getAlbumList,
  getPhotosFromAlbum,
  photo,
};
