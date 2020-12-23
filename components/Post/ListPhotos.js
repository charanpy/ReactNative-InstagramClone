import React, { useContext, useState, useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import { PostContext } from './helper/Image';
import TextComponent from '../TextComponent';

const ListPhotos = () => {
  const { state, dispatch } = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    if (!state.multiple) {
      setSelectedImage({});
    }
    setSelectedImage({});
  }, [state.multiple, selectedImage.length]);
  const screenWidth = Dimensions.get('window').width / 4 - 5;
  const selectedImagesFromAlbum = (photoUri, photoId) => {
    if (selectedImage[photoId]) {
      setSelectedImage((previousImage) => {
        console.log(true);
        const imageRef = { ...previousImage };
        delete imageRef[photoId];
        return imageRef;
      });
      dispatch({ type: 'REMOVE_IMAGE', payload: photoUri });
    } else if (!state.multiple) {
      setSelectedImage({
        [photoId]: photoUri,
      });
      dispatch({
        type: 'ADD_IMAGE',
        payload: {
          photoUri,
          multiple: state.multiple,
        },
      });
    } else {
      setSelectedImage((previousImage) => {
        return {
          ...previousImage,
          [photoId]: photoUri,
        };
      });
      dispatch({
        type: 'ADD_IMAGE',
        payload: { photoUri, multiple: state.multiple },
      });
    }
  };
  // console.log(selectedImage, state.selectedImagesFromAlbum, state.multiple);
  const getPhotos = ({ item }) => {
    console.log(1, state.media[item]);
    return (
      <>

        <TouchableOpacity
          style={{
            position: 'relative',
          }}
          onPress={() => selectedImagesFromAlbum(state.media[item], item)}
          onLongPress={() => dispatch({ type: 'SET_MULTIPLE_IMAGE' })}
        >

          <Image
            source={{
              // eslint-disable-next-line
              uri: state.media[item] && state.media[item],
              isStatic: true,
            }}
            style={{
              width: screenWidth,
              height: screenWidth,
              resizeMode: 'cover',
              marginRight: 5,
            }}
          />

          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: selectedImage[item]
                ? 'rgba(255,255,255,0.40);'
                : 'transparent',
            }}
          />
          {state.multiple && (
            <View
              style={[
                styles.Selected,
                {
                  backgroundColor: selectedImage[item]
                    ? '#0275d8'
                    : '#292b2c',
                  borderColor: 'white',
                  borderWidth: 2,
                },
              ]}
            >
              <TextComponent
                style={{
                  fontSize: 13,
                  fontFamily: 'Roboto-Regular',
                }}
              >
                {state.selectedImagesFromAlbum.indexOf(state.media[item]) >= 0
                  ? state.selectedImagesFromAlbum.indexOf(state.media[item]) + 1

                  : ''}
              </TextComponent>
            </View>
          )}
        </TouchableOpacity>

      </>
    );
  };

  return (
    <>
      {state.media && (
        <FlatList
          columnWrapperStyle={{
            flexWrap: 'wrap',
            width: '100%',
          }}
          data={Object.keys(state.media)}
          renderItem={getPhotos}
          keyExtractor={(item) => item}
          numColumns={4}
        />
      )}
    </>
  );
};

export default ListPhotos;
const styles = StyleSheet.create({
  Selected: {
    position: 'absolute',
    top: 2,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
