import {
  useState, useEffect, useReducer, useCallback
} from 'react';
// import { BackHandler } from 'react-native';
import UseBackHandler from '../../../helper/utils/CustomBackHandler';
import { initialState, PostReducer } from '../../../components/Post/reducer/PostReducer';
import CameraRollPermission from '../../../components/Post/helper/Image';

const PostState = (navigation) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const [loaded, setLoaded] = useState(false);
  console.log('Post render');

  // CAMERA_ROLL Permission
  useEffect(() => {
    const askPermission = async () => {
      const isCameraRollEnabled = await CameraRollPermission.getCameraRollPermission();
      if (isCameraRollEnabled) {
        setLoaded(true);
        return;
      }
      const isPermissionGranted = await CameraRollPermission.askCameraRollPermission();
      if (isPermissionGranted) {
        setLoaded(true);
      }
    };
    askPermission();
  }, [navigation, loaded]);

  // Back Button Handler
  const clearUpDataOnUnMount = useCallback(() => {
    setLoaded(false);
    console.log('exit', loaded);
    dispatch({
      type: 'EMPTY',
    });
  }, [loaded]);
  UseBackHandler(clearUpDataOnUnMount);

  useEffect(() => {
    const blur = navigation.addListener('didFocus', () => {
      setLoaded((val) => !val);
      console.log('focussed');
    });
    return () => blur.remove();
  }, [loaded, navigation]);

  return [state, dispatch, loaded, clearUpDataOnUnMount];
};

export default PostState;
