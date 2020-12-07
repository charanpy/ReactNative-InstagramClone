import React, { useEffect } from 'react';
import { Image } from 'react-native';
import MainContainer from './MainContainer';
import { getData } from '../helper/utils/token';

const image = require('../assets/instagram.png');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    getData().then((res) => {
      navigation.navigate(res ? 'App' : 'Auth');
    });
  });

  return (
    <MainContainer
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        style={{ width: '30%', height: '15%' }}
        source={image}
      />
    </MainContainer>
  );
};

export default SplashScreen;
