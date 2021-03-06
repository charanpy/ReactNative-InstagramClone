import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const getAlbumList = async () => {
  const getAlbum = await MediaLibrary.getAlbumsAsync();
  return getAlbum;
};

// photo details
const getAlbumDetail = async (albumName) => {
  const getPhotos = await MediaLibrary.getAlbumAsync(albumName);
  return getPhotos;
};

// photo uri
const getAllPhotosInAlbum = async (getAlbums) => {
  const getAllPhotos = await MediaLibrary.getAssetsAsync({
    first: 20,
    album: getAlbums,
    sortBy: ['modificationTime'],
    mediaType: ['photo', 'video'],
  });
  return getAllPhotos;
};

export const lauchCamera = async () => {
  const IsCameraEnabled = await Permissions.getAsync(Permissions.CAMERA);
  if (!IsCameraEnabled.granted) {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (!granted) {
      return false;
    }
  }

  const {
    cancelled,
    uri
  } = await ImagePicker.launchCameraAsync({
    mediaTypes: 'All',
    allowsEditing: true,
    aspect: [4, 5],
    videoMaxDuration: 120,
    quality: 0.9
  });

  return {
    cancelled,
    uri
  };
};

const getCameraRollPermission = async () => {
  const { granted } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL
  );
  return granted;
};

const askCameraRollPermission = async () => {
  const { granted } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL
  );
  return granted;
};

export default {
  getAlbumList,
  getAlbumDetail,
  getAllPhotosInAlbum,
  getCameraRollPermission,
  askCameraRollPermission,
};
