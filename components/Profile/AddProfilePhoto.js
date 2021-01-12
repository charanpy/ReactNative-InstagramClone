import React from 'react';
import {
  StyleSheet, Image, Dimensions
} from 'react-native';

const AddProfilePhoto = () => {
  return (

    <Image
      // eslint-disable-next-line
      source={require("../../assets/user1.jpg")}
      style={styles.Profile_Info}
    />

  );
};

export default AddProfilePhoto;

const styles = StyleSheet.create({
  Profile_Info: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    borderWidth: 1,
    borderRadius: Dimensions.get('window').width / 4,
    marginLeft: '10%',
    // width: Dimensions.get('window').width / 3,
  },

});
