import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectPhotos,
  selectIsLoading,
  selectIsMultiple,
  selectedImage,
  selectSelectedImage,
} from '../../../redux-sagas/Post/Post.selector';
import {
  listAllPhotosStart,
  setSelectedImageStart,
} from '../../../redux-sagas/Post/Post.actions';
import TextComponent from '../../shared/Text/TextComponent';
import UseListPhotoState from './ListPhotos.state';
import { color } from '../../../helper/utils/constants';
import styles from './ListPhotos.style';

const ListPhotos = ({
  listAllPhotosStart: listPhotos,
  photos,
  loading,
  setSelectedImageStart: selectImage,
  multiple,
  listSelectedImage,
}) => {
  const [checkIsImageSelected, getIndex] = UseListPhotoState(
    listPhotos,
    listSelectedImage
  );
  const renderImage = ({ item }) => {
    return (
      <TouchableOpacity
        key={item}
        onPress={() => selectImage(item, photos[item])}
      >
        <Image
          source={{
            uri: photos && photos[item],
            isStatic: true,
          }}
          style={styles.Image}
        />
        <View
          style={[
            styles.Selected_Image,
            {
              backgroundColor: checkIsImageSelected(photos[item] || null)
                ? 'rgba(255,255,255,0.40);'
                : 'transparent',
            },
          ]}
        />
        {multiple && (
          <View
            style={[
              styles.Selected,
              {
                backgroundColor: checkIsImageSelected(photos[item] || null)
                  ? '#0275d8'
                  : '#292b2c',
                borderColor: 'white',
                borderWidth: 2,
              },
            ]}
          >
            <TextComponent style={styles.Text}>
              {getIndex(photos[item]) >= 0 ? getIndex(photos[item]) + 1 : ''}
            </TextComponent>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      {!loading ? (
        <FlatList
          columnWrapperStyle={{
            flexWrap: 'wrap',
            width: '100%',
          }}
          data={Object.keys(photos)}
          renderItem={renderImage}
          keyExtractor={(item) => item}
          numColumns={4}
        />
      ) : (
        <View style={styles.Loader}>
          <ActivityIndicator size='large' color={color.PRIMARY_BLUE} />
        </View>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  photos: selectPhotos,
  loading: selectIsLoading,
  multiple: selectIsMultiple,
  selectedImg: selectedImage,
  listSelectedImage: selectSelectedImage,
});

const mapDispatchToProps = (dispatch) => ({
  listAllPhotosStart: (albumName) => dispatch(listAllPhotosStart(albumName)),
  setSelectedImageStart: (id, uri) =>
    dispatch(setSelectedImageStart({ id, uri })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPhotos);
