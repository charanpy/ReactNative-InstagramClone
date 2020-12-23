import React, { useContext, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { PostContext } from './helper/Image';

const ListPhotos = () => {
  const { state, dispatch } = useContext(PostContext);
  const [selectedImage, setSelectedImage] = useState({});

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
    } else {
      setSelectedImage((previousImage) => {

        return {
          ...previousImage,
          [photoId]: photoUri,
        };
      });
      dispatch({ type: 'ADD_IMAGE', payload: { photoUri, multiple: state.multiple } });
    }
  };
  console.log(selectedImage, state.selectedImagesFromAlbum, state.multiple);
  const getPhotos = ({ item }) => {
    return (
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
            uri: state.media[item],
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
            backgroundColor: state.multiple
              ? 'rgba(255,255,255,0.40);'
              : 'transparent',
          }}
        />
        <View style={styles.Selected}>
          <Text>1 </Text>
        </View>
      </TouchableOpacity>
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
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
