import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserProfile } from '../../redux-sagas/user/user.selector';
import MainContainer from '../../screens/MainContainer';
// import IconComponent from '../Icon';
import TextComponent from '../TextComponent';
import AddProfilePhoto from './AddProfilePhoto';

const DisplayProfile = ({ userProfile }) => {
  const hasProfilePhoto = !!userProfile.photo.includes('cdninstagram');
  return (
    <MainContainer>
      <View style={styles.Profile_Info_Container}>
        <View style={styles.Profile_Photo}>
          {hasProfilePhoto && <AddProfilePhoto />}
        </View>
        <View style={styles.Profile_Info_Details}>
          <TouchableOpacity onPress={() => console.log('k')}>
            <View>
              <TextComponent
                style={styles.Profile_Data}
              >
                0
              </TextComponent>
              <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>
                Posts
              </TextComponent>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <TextComponent style={styles.Profile_Data}>
                {userProfile && userProfile.followers.length}
              </TextComponent>
              <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>Followers</TextComponent>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <TextComponent style={styles.Profile_Data}>
                {userProfile && userProfile.following.length}
              </TextComponent>
              <TextComponent style={{ fontFamily: 'Proxima-Regular' }}>Following</TextComponent>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile,
});
export default connect(mapStateToProps)(DisplayProfile);

const styles = StyleSheet.create({
  Profile_Info_Container: {
    width: '100%',
    paddingVertical: 20,
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
    marginRight: '5%',
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
