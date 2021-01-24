import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import TextComponent from '../../shared/Text/TextComponent';
import UseListState from './ListState';
import styles from './List.styles';

const Photos = ({ item }) => {
  const [state, dispatch, selectedImagesFromAlbum] = UseListState();
  console.log('List');
  return (
    <>
      <TouchableOpacity
        style={{ position: 'relative' }}
        onPress={() => selectedImagesFromAlbum(state.media[item])}
        onLongPress={() => dispatch({ type: 'SET_MULTIPLE_IMAGE' })}
      >
        <Image
          source={{
            uri: state.media[item] && state.media[item],
            isStatic: true,
          }}
          style={styles.Image}
        />

        <View
          style={[
            styles.Selected_Image,
            {
              backgroundColor: state.selectedImagesFromAlbum.includes(
                state.media[item]
              )
                ? 'rgba(255,255,255,0.40);'
                : 'transparent',
            },
          ]}
        />
        {state.multiple && (
          <View
            style={[
              styles.Selected,
              {
                backgroundColor:
                  state.selectedImagesFromAlbum.indexOf(state.media[item])
                    >= 0
                    ? '#0275d8'
                    : '#292b2c',
                borderColor: 'white',
                borderWidth: 2,
              },
            ]}
          >
            <TextComponent style={styles.Text}>
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

export default Photos;
