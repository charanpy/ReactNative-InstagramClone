const AlbumNamesArrayToObject = (albumNames, key, value) => {
  const albumNamesObject = {};
  return albumNames.reduce((obj, album) => {
    return {
      ...obj,
      [album[key]]: album[value],
    };
  }, albumNamesObject);
};

export const setDefaultPhoto = (photo) => {
  const defaultPhoto = [
    {
      [photo.id]: photo.uri,
    },
  ];
  return defaultPhoto;
};

export const setSelectedImage = ({ id, uri: image }, state) => {
  const getSelectedImageFromUser = {
    [image]: true,
  };

  if (!state.isMultiple || id === 'camera') {
    return getSelectedImageFromUser;
  }

  const selectedImageState = { ...state.selectedImage };
  if (selectedImageState[image]) {
    delete selectedImageState[image];
    return selectedImageState;
  }

  return { ...selectedImageState, ...getSelectedImageFromUser };
  // const selectedImage = [
  //   {
  //     id: image.id,
  //     uri: image.uri
  //   }
  // ];
  // if (!state.isMultiple) {
  //   return selectedImage;
  // }
  // return [...state.selectedImage, selectedImage];
};

export default AlbumNamesArrayToObject;
