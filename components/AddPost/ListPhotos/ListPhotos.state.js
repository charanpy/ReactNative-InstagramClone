import { useEffect } from 'react';

const ListPhotosState = (listPhotos, image) => {
  useEffect(() => {
    listPhotos('Camera');
  }, [listPhotos]);
  const checkIsImageSelected = (uri) => {
    return image[uri];
  };
  const getIndex = (uri) => {
    return Object.keys(image).findIndex((img) => img === uri);
  };
  return [checkIsImageSelected, getIndex];
};

export default ListPhotosState;
