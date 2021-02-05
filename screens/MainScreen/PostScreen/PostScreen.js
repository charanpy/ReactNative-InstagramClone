import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { askPermissionStart, emptyMediaStart } from '../../../redux-sagas/Post/Post.actions';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import UsePost from './PostScreen.state';
import { selectIsPermissionGranted } from '../../../redux-sagas/Post/Post.selector';
import SelectAlbum from '../../../components/AddPost/SelectAlbum/SelectAlbum';
import ListPhotos from '../../../components/AddPost/ListPhotos/ListPhotos';
import SelectedImage from '../../../components/AddPost/SelectedImage/SelectedImage';
import SelectAlbumModal from '../../../components/AddPost/SelectAlbumModal/SelectAlbumModal';

const PostScreen = ({
  navigation,
  askPermissionStart: askPermission,
  hasPermission,
  emptyMediaStart: emptyMedia
}) => {
  UsePost(askPermission, navigation, hasPermission, emptyMedia);
  console.log('Post Rendered');
  return (
    <>
      {hasPermission && (
        <MainContainer>
          <PostHeader
            onClick={() => emptyMedia()}
            navigation={navigation}
            route='Home'
            headerTitle='Add Post'
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
});
const mapDispatchToProps = (dispatch) => ({
  askPermissionStart: () => dispatch(askPermissionStart()),
  emptyMediaStart: () => dispatch(emptyMediaStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
