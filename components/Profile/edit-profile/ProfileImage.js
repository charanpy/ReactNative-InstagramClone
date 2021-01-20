import React from 'react';
import {
  StyleSheet, Image, View, Dimensions, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import ImageSelector from '../../../redux-sagas/profile/profile.selector';
import { setModalVisible } from '../../../redux-sagas/profile/profile.action';
import TextComponent from '../../TextComponent';

const ProfileImage = ({ setModalVisible: modal, image }) => {
  // eslint-disable-next-line
  const source = (image.includes('cdn') && require('../../../assets/user1.jpg')) || {
    uri: image
  };
  return (
    <View style={styles.Image_Container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={source}
          style={styles.Image}
        />
      </View>
      <TouchableOpacity onPress={() => modal()}>
        <View>
          <TextComponent style={styles.Profile_Text}>Change Profile Photo</TextComponent>
        </View>
      </TouchableOpacity>

    </View>
  );
};

ProfileImage.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setModalVisible: () => dispatch(setModalVisible())
});

const mapStateToProps = createStructuredSelector({
  image: ImageSelector.selectImageUri
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);
const screenWidth = Dimensions.get('window').width / 3;
const styles = StyleSheet.create({
  Image: {
    height: screenWidth,
    width: screenWidth,
    borderRadius: screenWidth / 2
  },
  Image_Container: {
    marginTop: '5%'
  },
  Profile_Text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.8,
    marginTop: '8%',
    color: '#0275d8'
  }

});
