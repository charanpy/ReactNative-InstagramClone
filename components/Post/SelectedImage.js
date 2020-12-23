import React, { useContext, useEffect } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TextComponent from '../TextComponent';
import IconComponent from '../Icon';
import Media, { PostContext } from './helper/Image';

const SelectedImage = () => {
  const { state, dispatch } = useContext(PostContext);
  useEffect(() => {
    async function getSelectedImage() {
      const getPhotosFromAlbum = await Media.getPhotosFromAlbum(
        state.albumName
      );
      const photo = await Media.photo(getPhotosFromAlbum);

      dispatch({ type: 'SET_MEDIA', payload: photo.assets });
      dispatch({ type: 'DEFAULT_IMAGE' });
    }
    getSelectedImage();
  }, [
    state.albumName,
    dispatch,
    state.multiple,
    state.selectedImagesFromAlbum,
  ]);
  return (
    <>
      {(state.selectedImagesFromAlbum || state.selectedImage) && (
        <View style={styles.Selected_Image}>
          <Image
            source={{
              uri:
                state.selectedImagesFromAlbum[
                state.selectedImagesFromAlbum.length - 1
                ] || state.selectedImage[state.selectedImage.length - 1],
              isStatic: true,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
      )}

      <View style={styles.SelectedImage_Container}>
        <TouchableOpacity onPress={() => dispatch({ type: 'MODAL' })}>
          <View
            style={{
              paddingLeft: 10,
              flexDirection: 'row',
            }}
          >
            <TextComponent style={styles.Set_Album_Name}>
              {state.albumName}
            </TextComponent>
            <View
              style={{
                justifyContent: 'flex-end',
                marginLeft: '2%',
              }}
            >
              <IconComponent
                Component={Ionicons}
                name='ios-arrow-down'
                size={22}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => dispatch({ type: 'SET_MULTIPLE_IMAGE' })}
          >
            <IconComponent
              Component={MaterialCommunityIcons}
              name='image-filter-none'
              size={23}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingLeft: 10,
            }}
          >
            <IconComponent
              Component={MaterialCommunityIcons}
              name='camera-outline'
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SelectedImage;

const styles = StyleSheet.create({
  Selected_Image: {
    marginTop: '5%',
    width: '100%',
    height: '50%',
    overflow: 'scroll',
  },
  Set_Album_Name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
  SelectedImage_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20%',
    marginTop: '5%',
  },
  Camera_Container: {
    flexDirection: 'row',
    paddingRight: 20,
  },
});
