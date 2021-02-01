import { useEffect } from 'react';

const ListPhotosState = (listPhotos) => {
  useEffect(() => {
    listPhotos('Camera');
  }, [listPhotos]);
};

export default ListPhotosState;
