import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getProfileStart } from '../../redux-sagas/profile/profile.action';
import { selectUserId } from '../../redux-sagas/user/user.selector';

const ProfileScreen = ({ userObject: profileId, getProfileStart: getProfile, navigation }) => {
  useEffect(() => {

    if (!profileId) {
      navigation.navigate('Home');
    }
    getProfile(profileId);
  }, [getProfile, navigation, profileId]);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
};

ProfileScreen.propTypes = {
  userObject: PropTypes.string,
  getProfileStart: PropTypes.func.isRequired,
};
ProfileScreen.defaultProps = {
  userObject: null
};
const mapStateToProps = createStructuredSelector({
  userObject: selectUserId,
});
const mapDispatchToProps = (dispatch) => ({
  getProfileStart: (userId) => dispatch(getProfileStart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
