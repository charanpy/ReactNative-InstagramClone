import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TextComponent from '../TextComponent';
import IconComponent from '../Icon';
import Media, { PostContext, lauchCamera } from './helper/Image';

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

  const getPhotoFromCamera = async () => {
    const photoDetail = await lauchCamera();
    console.log(photoDetail, 6);
    if (photoDetail?.cancelled) {
      console.log('cancelled');
      return;
    }
    if (!photoDetail?.cancelled && photoDetail?.uri) {
      const { uri } = photoDetail;
      dispatch({
        type: 'ADD_IMAGE',
        payload: {
          photoUri: uri,
          multiple: false,
        },
      });
    }
  };
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
                marginLeft: '3%',
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
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: state.multiple ? '#0275d8' : '#333',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconComponent
                Component={MaterialCommunityIcons}
                name='image-filter-none'
                size={18}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            onPress={getPhotoFromCamera}
          >
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: '#333',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconComponent
                Component={MaterialCommunityIcons}
                name='camera-outline'
                size={18}

              />
            </View>
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
