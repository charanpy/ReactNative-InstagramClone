import React from 'react';
import DisplayProfile from '../../components/Profile/DisplayProfile';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import MainContainer from '../MainContainer';
import ProfileLoaderHOC from '../Loader/ProfileLoader';

const ProfileScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <DisplayProfile />
      <ProfileInfo onClick={() => navigation.navigate('EditProfile')} />
    </MainContainer>
  );
};

export default ProfileLoaderHOC(ProfileScreen);
