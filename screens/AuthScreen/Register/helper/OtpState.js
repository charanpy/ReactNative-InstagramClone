import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

const OtpState = (status, navigation, verifyOtp) => {
  const [OtpVerify, setOtp] = useState('');

  useEffect(() => {
    if (status === 'GetPassword') {
      navigation.navigate('ActivateAccount');
    } else if (status === null) {
      navigation.navigate('Login');
    }
  }, [status, navigation]);

  useEffect(() => {
    const handleBackButton = () => {
      navigation.navigate({
        routeName: 'ConfirmScreen',
        params: {
          navigation: 'Otp',
        },
      });

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => backHandler.remove();
  }, [navigation]);

  const onSubmitHandler = () => {
    if (OtpVerify.length !== 6) {
      console.log(true);
    }
    verifyOtp(OtpVerify);
    setOtp('');
  };

  return [OtpVerify, setOtp, onSubmitHandler];
};

export default OtpState;
