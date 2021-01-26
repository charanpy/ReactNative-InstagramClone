import React from 'react';
// import TextComponent from '../../../components/shared/Text/TextComponent';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';

const PostScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <PostHeader
        onClick={() => {}}
        navigation={navigation}
        route='Home'
        headerTitle='Add Post'
      />
    </MainContainer>
  );
};

export default PostScreen;
