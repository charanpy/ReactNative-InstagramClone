import React from 'react';
import { View, TouchableNativeFeedback, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-native-modal';
import IconComponent from '../../shared/Icon/Icon';
import MainContainer from '../../../screens/MainContainer';
import selectModalVisible from '../../../redux-sagas/modal/modal.selector';
import { getAllAlbumNameStart, listAllPhotosStart } from '../../../redux-sagas/Post/Post.actions';
import { setModalVisibilityStart } from '../../../redux-sagas/modal/modal.action';
import { selectAlbumNameList } from '../../../redux-sagas/Post/Post.selector';
import Touchable from '../../shared/Touchable/Touchable';
import UseModalState from './SelectAlbumModal.state';
import styles from './SelectAlbumModal.style';

const SelectAlbumModal = ({
  visible,
  setModalVisibilityStart: setModal,
  albums,
  getAllAlbumNameStart: getAlbumNames,
  listAllPhotosStart: listPhotos
}) => {
  const [clickHandler] = UseModalState(setModal, getAlbumNames, listPhotos);
  const ModalView = ({ item }) => (
    <Touchable
      key={String(item)}
      TouchableComponent={TouchableNativeFeedback}
      TouchableStyle={styles.Touchable}
      onClick={() => clickHandler(albums[item])}
      ViewStyle={{ padding: 10 }}
      TextStyle={[styles.Album_Text]}
      DisplayText={[albums[item]]}
    />
  );
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={setModal}
      swipeDirection='down'
      onSwipeComplete={setModal}
      animationOut='slideOutDown'
      style={styles.Modal_Container}
      useNativeDriver
      unMountOnExit
    >
      <MainContainer modal style={styles.Main_Cont}>
        <View style={styles.Icon}>
          <IconComponent Component={FontAwesome} name='minus' size={48} />
        </View>

        <View style={styles.List_Container}>
          <FlatList
            data={albums && Object.keys(albums)}
            renderItem={ModalView}
            keyExtractor={(item) => item}
          />
        </View>
      </MainContainer>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  visible: selectModalVisible,
  albums: selectAlbumNameList,
});

const mapDispatchToProps = (dispatch) => ({
  setModalVisibilityStart: () => dispatch(setModalVisibilityStart()),
  getAllAlbumNameStart: () => dispatch(getAllAlbumNameStart()),
  listAllPhotosStart: (albumName) => dispatch(listAllPhotosStart(albumName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAlbumModal);
