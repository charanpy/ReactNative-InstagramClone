import React, { useEffect, useReducer, useState } from 'react';
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
  useEffect(() => {

    console.log(Permissions.getAsync(Permissions.CAMERA_ROLL));
    const askPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        navigation.navigate('Home');
      }
    };
    askPermission();
    setLoaded(true);
  }, [navigation, loaded]);

  useEffect(() => {
    const handleBackButton = () => {
      setLoaded(false);
      console.log('exit', loaded);
      dispatch({
        type: 'EMPTY',
      });
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => backHandler.remove();
  }, [dispatch, loaded]);

  useEffect(() => {
    const blur = navigation.addListener('didFocus', () => {
      setLoaded((val) => !val);
      console.log('focussed');
    });
    return () => blur.remove();
  }, [loaded, navigation]);
  return (
    <>
      { loaded
        && (
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
              <PostHeader />
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

export default AddPost;
