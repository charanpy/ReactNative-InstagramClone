const AlbumNamesArrayToObject = (albumNames, key, value) => {
  const albumNamesObject = {};
  return albumNames.reduce((obj, album) => {
    return {
      ...obj,
      [album[key]]: album[value]
    };
  }, albumNamesObject);
};

export const setDefaultPhoto = (photo) => {
  const defaultPhoto = [{
    [photo.id]: photo.uri
  }];
  return defaultPhoto;
};

export default AlbumNamesArrayToObject;
