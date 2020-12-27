import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserProfile } from '../../redux-sagas/user/user.selector';
import MainContainer from '../../screens/MainContainer';

const DisplayProfile = ({ userProfile }) => {
  console.log(userProfile.photo);
  return (
    <MainContainer>
      <Image
        source={{ uri: userProfile.photo }}
        style={{ height: 100, width: 100, backgroundColor: 'red' }}
      />
    </MainContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile
})
export default connect(mapStateToProps)(DisplayProfile);

const styles = StyleSheet.create({});
