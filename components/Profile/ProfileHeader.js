import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Dimensions
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectUsername } from '../../redux-sagas/user/user.selector';
import MainContainer from '../../screens/MainContainer';
import TextComponent from '../TextComponent';
import IconComponent from '../Icon';

const ProfileHeader = ({ username }) => {
  return (
    <MainContainer style={styles.Profile_Header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <View style={styles.ProfileContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconComponent Component={Feather} name='lock' size={15} />
          </View>
          <TextComponent style={styles.Username}>
            {username && username.split('@')[0]}
          </TextComponent>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: '10%',
            width: 66,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity>
            <View>
              <IconComponent Component={Feather} name='plus' size={26} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <IconComponent Component={FontAwesome} name='bars' size={26} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};
ProfileHeader.prototype = {
  username: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername,
});

export default connect(mapStateToProps)(ProfileHeader);

const styles = StyleSheet.create({
  Profile_Header: {
    height: 60,
    width: Dimensions.get('window').width,
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Username: {
    fontFamily: 'Nue-Regular',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  ProfileContainer: {
    flexDirection: 'row',
    //marginRight: '10%',
    // justifyContent: 'space-between'
  },
});
