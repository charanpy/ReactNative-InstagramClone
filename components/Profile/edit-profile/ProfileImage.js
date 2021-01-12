import React from 'react';
import {
  StyleSheet, Image, View, Dimensions, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModalVisible } from '../../../redux-sagas/profile/profile.action';
import TextComponent from '../../TextComponent';

const ProfileImage = ({ setModalVisible: modal }) => {
  return (
    <View style={styles.Image_Container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          // eslint-disable-next-line
          source={require('../../../assets/user1.jpg')}
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
  setModalVisible: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setModalVisible: () => dispatch(setModalVisible())
});

export default connect(null, mapDispatchToProps)(ProfileImage);
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
