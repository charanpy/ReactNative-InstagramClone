import React, { useContext, useEffect } from 'react';
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
  useEffect(() => {
    console.log('ListPhoto render');
    console.log(' ');
  }, []);

  const screenWidth = Dimensions.get('window').width / 4 - 5;
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
  // console.log(selectedImage, state.selectedImagesFromAlbum, state.multiple);
  const getPhotos = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={{
            position: 'relative',
          }}
          onPress={() => selectedImagesFromAlbum(state.media[item])}
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
              backgroundColor: state.selectedImagesFromAlbum.includes(
                state.media[item]
              )
                ? 'rgba(255,255,255,0.40);'
                : 'transparent',
            }}
          />
          {state.multiple && (
            <View
              style={[
                styles.Selected,
                {
                  backgroundColor:
                    state.selectedImagesFromAlbum.indexOf(state.media[item]) >=
                      0
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
