import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getAllAlbumNameStart } from '../../../redux-sagas/Post/Post.actions';
import UseSelectAlbum from './SelectAlbum.state';

const SelectAlbum = ({ getAllAlbumNameStart: getAlbumNames }) => {
  UseSelectAlbum(getAlbumNames);
  console.log('SelectAlbumName');
  return (
    <View>
      <Text>Select Album</Text>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllAlbumNameStart: () => dispatch(getAllAlbumNameStart())
});

export default connect(null, mapDispatchToProps)(SelectAlbum);
