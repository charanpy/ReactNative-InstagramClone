import React from 'react';
// import TextComponent from '../../../components/shared/Text/TextComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { askPermissionStart } from '../../../redux-sagas/Post/Post.actions';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import UsePost from './PostScreen.state';
import { selectIsPermissionGranted } from '../../../redux-sagas/Post/Post.selector';
import SelectAlbum from '../../../components/AddPost/SelectAlbum/SelectAlbum';
import ListPhotos from '../../../components/AddPost/ListPhotos/ListPhotos';

const PostScreen = ({
  navigation,
  askPermissionStart: askPermission,
  hasPermission,
}) => {
  UsePost(askPermission, navigation, hasPermission);
  console.log('Rendered');
  return (
    <>
      {hasPermission && (
        <MainContainer>
          <PostHeader
            onClick={() => {}}
            navigation={navigation}
            route='Home'
            headerTitle='Add Post'
          />
          <SelectAlbum />
          <ListPhotos />
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
});
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
