import React from 'react';
import { View } from 'react-native';
import { PostContext } from '../../../components/Post/helper/Image';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import SelectAlbum from '../../../components/Post/SelectAlbum';
import SelectedImage from '../../../components/Post/SelectedImage';
import ListPhotos from '../../../components/Post/ListPhotos';
import UsePostState from './PostState';

const AddPost = ({ navigation }) => {
  const [state, dispatch, loaded, clearUpDataOnUnMount] = UsePostState(navigation);
  return (
    <>
      {loaded && (
        <MainContainer
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <PostHeader
              onClick={clearUpDataOnUnMount}
              navigation={navigation}
              route='Home'
              headerTitle='Add Post'
            />
            <PostContext.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <SelectedImage />
              <SelectAlbum />
              <ListPhotos />
            </PostContext.Provider>
          </View>
        </MainContainer>
      )}
    </>
  );
};

export default React.memo(AddPost);
