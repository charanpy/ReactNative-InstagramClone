import React from 'react';
import {
  FlatList, TouchableOpacity, Image, ActivityIndicator, View
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhotos, selectIsLoading } from '../../../redux-sagas/Post/Post.selector';
import { listAllPhotosStart } from '../../../redux-sagas/Post/Post.actions';
import UseListPhotoState from './ListPhotos.state';
import { color } from '../../../helper/utils/constants';
import styles from './ListPhotos.style';

const ListPhotos = ({ listAllPhotosStart: listPhotos, photos, loading }) => {
  UseListPhotoState(listPhotos);
  const renderImage = ({ item }) => {
    return (
      <TouchableOpacity key={item}>
        <Image
          source={{
            uri: photos && photos[item],
            isStatic: true,
          }}
          style={styles.Image}
        />
      </TouchableOpacity>
    );
  };
  console.log('List-photos', photos);
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
  loading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  listAllPhotosStart: (albumName) => dispatch(listAllPhotosStart(albumName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPhotos);
