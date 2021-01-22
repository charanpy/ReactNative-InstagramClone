import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextComponent from '../TextComponent';
import { selectBackground } from '../../redux-sagas/theme/theme.selector';
import ProfileSelector from '../../redux-sagas/profile/profile.selector';

const ProfileInfo = ({ userProfile: Profile, background, onClick }) => {
  return (
    <View style={styles.Info}>
      <TextComponent>{Profile?.name && Profile.name}</TextComponent>
      <TextComponent>
        {Profile?.username
          && (Profile.username.includes('@')
            ? Profile.username.split('@')[0]
            : Profile.username)}
      </TextComponent>
      <TextComponent>{Profile?.website && Profile.website}</TextComponent>
      <TextComponent>{Profile?.bio && Profile.bio}</TextComponent>
      <TouchableOpacity
        onPress={onClick}
        style={{
          padding: 8,
          display: 'flex',
          marginTop: '5%',
          justifyContent: 'center',
          marginRight: '5%',
          borderRadius: 6,
          borderWidth: 0.4,
          borderColor:
            background === 'black'
              ? 'rgba(255,255,255,0.7)'
              : 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View>
          <TextComponent
            style={styles.Button}
          >
            Edit Profile
          </TextComponent>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: ProfileSelector.selectUserProfile,
  background: selectBackground,
});

export default connect(mapStateToProps)(ProfileInfo);

const styles = StyleSheet.create({
  Info: {
    marginLeft: '5%',
  },
  Button: {
    textAlign: 'center',
    fontSize: 15.8,
    fontFamily: 'Proxima-Regular',
  }
});
