import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import MainContainer from './MainContainer';
import { getData } from '../helper/utils/token';
import { selectIsLoading } from '../redux-sagas/user/user.selector';

const image = require('../assets/instagram.png');

const SplashScreen = ({ navigation, loading }) => {
  useEffect(() => {
    if (loading === false) {
      getData().then((res) => {
        navigation.navigate(res ? 'App' : 'Auth');
      });
    }
  }, [loading, navigation]);

  return (
    <MainContainer
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image style={{ width: '30%', height: '15%' }} source={image} />
    </MainContainer>
  );
};

SplashScreen.prototype = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsLoading,
});

export default connect(mapStateToProps)(SplashScreen);
