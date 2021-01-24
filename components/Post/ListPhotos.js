import React, { useContext, useMemo } from 'react';
import { FlatList } from 'react-native';
import { PostContext } from './helper/Image';
import PhotoList from './List/List';

const ListPhotos = () => {
  const { state } = useContext(PostContext);
  return useMemo(() => (
    <>
      {state.media && (
        <FlatList
          columnWrapperStyle={{
            flexWrap: 'wrap',
            width: '100%',
          }}
          data={Object.keys(state.media)}
          renderItem={({ item }) => <PhotoList item={item} />}
          keyExtractor={(item) => item}
          numColumns={4}
        />
      )}
    </>
  ), [state.media]);
};

export default ListPhotos;
