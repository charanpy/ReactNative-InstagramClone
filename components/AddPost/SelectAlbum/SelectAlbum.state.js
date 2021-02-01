import { useEffect } from 'react';

const SelectAlbumState = (getAllAlbumNames) => {
  useEffect(() => {
    getAllAlbumNames();
  }, [getAllAlbumNames]);
};

export default SelectAlbumState;
