import React, { useEffect, useContext } from 'react';
import {
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Media, { PostContext } from './helper/Image';
import TextComponent from '../TextComponent';
import IconComponent from '../Icon';
import MainContainer from '../../screens/MainContainer';

const SelectAlbum = () => {
  const { state, dispatch } = useContext(PostContext);
  useEffect(() => {
    async function getListAlbum() {
      const getAlbumList = await Media.getAlbumList();
      dispatch({ type: 'GET_ALBUM_LIST', payload: getAlbumList });
    }
    getListAlbum();
  }, [dispatch]);
  return (
    <>
      <Modal
        isVisible={state.modalVisible}
        onBackButtonPress={() => dispatch({ type: 'MODAL' })}
        swipeDirection='down'
        onSwipeComplete={() => dispatch({ type: 'MODAL' })}
        animationOut='slideOutDown'
        style={{ width: '100%', padding: 0, margin: 0 }}
      >
        <ScrollView>
          <MainContainer
            modal
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                marginTop: '2%',
              }}
            >
              <IconComponent Component={FontAwesome} name='minus' size={48} />
            </View>

            <View>
              {state.albumList
                && state.albumList.map((album, index) => (
                  <TouchableNativeFeedback
                    key={index}
                    style={{ width: '100%' }}
                    onPress={() => {
                      dispatch({ type: 'SET_ALBUM_NAME', payload: album });
                      dispatch({ type: 'MODAL' });
                    }}
                  >
                    <View style={{ padding: 10 }}>
                      <TextComponent
                        style={{ fontFamily: 'Roboto-Regular', fontSize: 16 }}
                      >
                        {album}
                      </TextComponent>
                    </View>
                  </TouchableNativeFeedback>
                ))}
            </View>
          </MainContainer>
        </ScrollView>
      </Modal>
    </>
  );
};

export default SelectAlbum;
