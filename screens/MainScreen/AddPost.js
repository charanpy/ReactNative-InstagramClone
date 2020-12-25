import React, {
  useEffect, useReducer, useState, useCallback
} from 'react';
import { View, BackHandler } from 'react-native';
import * as Permissions from 'expo-permissions';
import { PostContext } from '../../components/Post/helper/Image';
import { initialState, PostReducer } from '../../components/Post/PostReducer';
import MainContainer from '../MainContainer';
import PostHeader from '../../components/PostHeader';
import SelectAlbum from '../../components/Post/SelectAlbum';
import SelectedImage from '../../components/Post/SelectedImage';
import ListPhotos from '../../components/Post/ListPhotos';

const AddPost = ({ navigation }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);

  const [loaded, setLoaded] = useState(false);
  console.log('Post render');

  useEffect(() => {
    const askPermission = async () => {
      const isCameraRollEnabled = await Permissions.getAsync(
        Permissions.CAMERA_ROLL
      );
      if (isCameraRollEnabled.granted) {
        setLoaded(true);
        return;
      }

      const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (granted) {
        const cameraRollRes = await Permissions.getAsync(
          Permissions.CAMERA_ROLL
        );
        console.log(2, cameraRollRes);
        setLoaded(true);
      }
    };
    askPermission();
  }, [navigation, loaded]);

  const clearUpDataOnUnMount = useCallback(() => {
    setLoaded(false);
    console.log('exit', loaded);
    dispatch({
      type: 'EMPTY',
    });
  }, [loaded]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      clearUpDataOnUnMount
    );
    return () => backHandler.remove();
  }, [clearUpDataOnUnMount]);
  useEffect(() => {
    const blur = navigation.addListener('didFocus', () => {
      setLoaded((val) => !val);
      console.log('focussed');
    });
    return () => blur.remove();
  }, [loaded, navigation]);
  return (
    <>
      {loaded && (
        <MainContainer
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <PostHeader
              onClick={clearUpDataOnUnMount}
              navigation={navigation}
            />
            <PostContext.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <SelectedImage />
              <SelectAlbum />
              <ListPhotos />
            </PostContext.Provider>
          </View>
        </MainContainer>
      )}
    </>
  );
};

export default React.memo(AddPost);
