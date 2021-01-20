import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserProfile } from '../../redux-sagas/user/user.selector';
import TextComponent from '../TextComponent';
import AddProfilePhoto from './AddProfilePhoto';
import profileSelector from '../../redux-sagas/profile/profile.selector';

const DisplayProfile = ({ photo, follow }) => {
  // console.log(12, userProfile);
  // eslint-disable-next-line
  const source = (photo.includes('cdn') && require('../../assets/user1.jpg')) || {
    uri: photo
  };
  return (
    <View style={styles.Profile_Info_Container}>
      <View style={styles.Profile_Photo}>
        <AddProfilePhoto source={source} />
      </View>
      <View style={styles.Profile_Info_Details}>
        <TouchableOpacity onPress={() => console.log('k')}>
          <View>
            <TextComponent style={styles.Profile_Data}>0</TextComponent>
            <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>
              Posts
            </TextComponent>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <TextComponent style={styles.Profile_Data}>
              {follow[0] || 0}
            </TextComponent>
            <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>
              Followers
            </TextComponent>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <TextComponent style={styles.Profile_Data}>
              {follow[1] || 0}
            </TextComponent>
            <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>
              Following
            </TextComponent>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile,
  photo: profileSelector.selectImageUri,
  follow: profileSelector.selectFollowersFollowing,
});
export default connect(mapStateToProps)(DisplayProfile);

const styles = StyleSheet.create({
  Profile_Info_Container: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Profile_Info_Details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width / 4,
    alignItems: 'center',
    marginRight: '10%',
  },
  Profile_Photo: {
    width: Dimensions.get('window').width / 3,
  },
  Profile_Data: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
