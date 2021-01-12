import React from 'react';
import DisplayProfile from '../../components/Profile/DisplayProfile';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import MainContainer from '../MainContainer';

const ProfileScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <DisplayProfile />
      <ProfileInfo onClick={() => navigation.navigate('EditProfile')} />
    </MainContainer>
  );
};

export default ProfileScreen;
