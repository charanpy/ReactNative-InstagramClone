import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { listAllPhotosStart } from '../../../redux-sagas/Post/Post.actions';
import UseListPhotoState from './ListPhotos.state';

const ListPhotos = ({
  listAllPhotosStart: listPhotos
}) => {
  UseListPhotoState(listPhotos);
  console.log('List-photos');
  return (
    <Text>List ph</Text>
  );
};

const mapDispatchToProps = (dispatch) => ({
  listAllPhotosStart: (albumName) => dispatch(listAllPhotosStart(albumName))
});

export default connect(null, mapDispatchToProps)(ListPhotos);
