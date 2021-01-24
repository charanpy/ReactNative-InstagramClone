import { useContext } from 'react';
import { PostContext } from '../helper/Image';

const ListState = () => {
  const { state, dispatch } = useContext(PostContext);

  const selectedImagesFromAlbum = (photoUri) => {
    if (state.selectedImagesFromAlbum.includes(photoUri)) {
      dispatch({ type: 'REMOVE_IMAGE', payload: photoUri });
    } else if (!state.multiple) {
      dispatch({
        type: 'ADD_IMAGE',
        payload: {
          photoUri,
          multiple: state.multiple,
        },
      });
    } else {
      dispatch({
        type: 'ADD_IMAGE',
        payload: { photoUri, multiple: state.multiple },
      });
    }
  };
  return [state, dispatch, selectedImagesFromAlbum];
};

export default ListState;
