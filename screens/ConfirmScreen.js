import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import GoBack from '../components/shared/GoBack/GoBack';

const ConfirmScreen = ({
  navigation
}) => {
  console.log(navigation.getParam('navigation'));

  useEffect(() => {
    const handleBackButton = () => {

      navigation.navigate('ConfirmScreen');

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <GoBack
        onCancelClick={() => navigation.navigate(navigation.getParam('navigation'))}
        onOkClick={() => navigation.navigate('Register')}
        onPop={() => navigation.pop()}
      />
    </View>
  );
};

export default ConfirmScreen;
