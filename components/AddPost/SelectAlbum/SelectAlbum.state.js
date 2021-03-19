import { lauchCamera } from '../../../helper/utils/MediaLibrary';

const SelectAlbumState = (setImage) => {
  const getCamImage = async () => {
    const { cancelled, uri } = await lauchCamera();
    if (!cancelled) setImage('camera', uri);
  };
  return [getCamImage];
};

export default SelectAlbumState;
