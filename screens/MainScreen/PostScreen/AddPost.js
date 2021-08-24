import React, { useEffect } from 'react';
import UploadPost from '../../../components/AddPost/UploadPost/UploadPost';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import MainContainer from '../../MainContainer';

const AddPost = ({ navigation }) => {
  // images from post screen (image passed from post screen to add post screen)
  const images = navigation.getParam('images');
  useEffect(() => {
    if (!images || !Object.keys(images).length) {
      navigation.navigate('post');
    }
    // eslint-disable-next-line
  }, [navigation]);
  return (
    <MainContainer>
      <PostHeader
        headerTitle='New Post'
        route='post'
        onClick={() => {}}
        navigation={navigation}
      />
      <UploadPost
        images={images && Object.keys(images)}
        navigation={navigation}
      />
    </MainContainer>
  );
};

export default AddPost;
