import React from 'react';
import {
  StyleSheet, View, Dimensions, Pressable, TouchableOpacity
} from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import selectProfile from '../../../redux-sagas/profile/profile.selector';
import MainContainer from '../../../screens/MainContainer';
import TextComponent from '../../TextComponent';
import { setModalVisible } from '../../../redux-sagas/profile/profile.action';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const UpadePhotoModal = ({ setModalVisible: setModal, photo, modal }) => {
  return (
    <Modal
      isVisible={modal}
      style={{ padding: 0, margin: 0 }}
      onBackButtonPress={() => setModal()}
      swipeDirection='down'
      onSwipeComplete={() => setModal()}
      animationOut='slideOutDown'
    >
      <Pressable
        style={styles.Modal}
        onPress={() => setModal()}
      >
        <MainContainer style={styles.Photo_Opt} modal>
          <View style={styles.Label}>
            <TextComponent>Change Profile Photo</TextComponent>
          </View>
          <TouchableOpacity
            style={styles.Options}
          >
            <View>
              <TextComponent style={styles.Text}>New Profile Photo</TextComponent>
            </View>
          </TouchableOpacity>
          {!photo.includes('cdn')
            && (
              <TouchableOpacity
                style={styles.Options}
              >
                <View>
                  <TextComponent style={styles.Text}>New Profile Photo</TextComponent>
                </View>
              </TouchableOpacity>
            )
          }

        </MainContainer>
      </Pressable>
    </Modal>
  );
};

UpadePhotoModal.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  setModalVisible: () => dispatch(setModalVisible()),
});

const mapStateToProps = createStructuredSelector({
  photo: selectProfile.selectUserPhoto,
  modal: selectProfile.selectIsModalVisible,
});

export default connect(mapStateToProps, mapDispatchToProps)(UpadePhotoModal);

const styles = StyleSheet.create({
  Modal: {
    padding: 0,
    margin: 0,
    flex: 1
  },
  Photo_Opt: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    margin: 0,
    width: '100%',
    height: Dimensions.get('window').height / 3.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  Label: {
    paddingVertical: 14,
    // marginLeft: '4%',
    display: 'flex',
    // alignItems: 'center',
    paddingLeft: '4%',
    borderWidth: 0.45,
    borderBottomColor: '#999'
  },
  Options: {
    paddingVertical: 14,
    marginLeft: '4%',
  },
  Text: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular'
  }
});
