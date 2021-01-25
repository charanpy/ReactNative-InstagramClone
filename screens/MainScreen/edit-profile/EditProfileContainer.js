import React from 'react';
import {
  View
} from 'react-native';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import ProfileImage from '../../../components/Profile/edit-profile/ProfileImage';
import UpdatePhotoModal from '../../../components/Profile/edit-profile/UpadePhotoModal';
import MainContainer from '../../MainContainer';
import EditInput from '../../../components/Profile/edit-profile/EditInput';
import ProfileLoaderHOC from '../../Loader/ProfileLoader';

const EditProfileContainer = ({ navigation }) => {

  return (
    <MainContainer style={{ flex: 1 }}>
      <PostHeader
        headerTitle='Edit Profile'
        navigation={navigation}
        onClick={() => { }}
        route='profile'
      />

      <UpdatePhotoModal />

      <View style={{ alignItems: 'center' }}>
        <ProfileImage />

      </View>
      <EditInput navigation={navigation} />

    </MainContainer>
  );
};

EditProfileContainer.navigationOptions = {
  tabBarVisible: false
};

export default ProfileLoaderHOC(EditProfileContainer);

// const styles = StyleSheet.create({})
