import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  askPermissionStart,
  emptyMediaStart,
  addPostStart,
} from '../../../redux-sagas/Post/Post.actions';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import UsePost from './PostScreen.state';
import {
  selectIsPermissionGranted,
  selectSelectedImage,
} from '../../../redux-sagas/Post/Post.selector';
import SelectAlbum from '../../../components/AddPost/SelectAlbum/SelectAlbum';
import ListPhotos from '../../../components/AddPost/ListPhotos/ListPhotos';
import SelectedImage from '../../../components/AddPost/SelectedImage/SelectedImage';
import SelectAlbumModal from '../../../components/AddPost/SelectAlbumModal/SelectAlbumModal';
// data.append('image', blob, detail.name);
const PostScreen = ({
  navigation,
  askPermissionStart: askPermission,
  hasPermission,
  emptyMediaStart: emptyMedia,
  images,
}) => {
  UsePost(askPermission, navigation, hasPermission, emptyMedia);
  const addPostHandler = () =>
    images &&
    Object.keys(images).length &&
    navigation.navigate('addPost', { images });

  return (
    <>
      {hasPermission && (
        <MainContainer>
          <PostHeader
            onClick={() => {}}
            navigation={navigation}
            route='Home'
            headerTitle='Add Post'
            onSuccessClick={addPostHandler}
          />
          <SelectedImage />
          <SelectAlbum />
          <ListPhotos />
          <SelectAlbumModal />
        </MainContainer>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hasPermission: selectIsPermissionGranted,
  images: selectSelectedImage,
});
const mapDispatchToProps = (dispatch) => ({
  askPermissionStart: () => dispatch(askPermissionStart()),
  emptyMediaStart: () => dispatch(emptyMediaStart()),
  addPostStart: (images) => dispatch(addPostStart({ images })),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
