import { useEffect } from 'react';

const SelectAlbumModalState = (setModalVisibility, getAllAlbumNames, listPhotos) => {
  useEffect(() => {
    getAllAlbumNames();
  }, [getAllAlbumNames]);
  const clickHandler = (album) => {
    setModalVisibility();
    listPhotos(album);
  };
  return [clickHandler];
};

export default SelectAlbumModalState;
