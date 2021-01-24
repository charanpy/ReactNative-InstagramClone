import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

const ActivateAccountState = (status, navigation, startRegister, email) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleBackButton = () => {
      if (status === 'Registered') {
        navigation.navigate('Login');
      } else {
        navigation.navigate({
          routeName: 'ConfirmScreen',
          params: {
            navigation: 'ActivateAccount',
          },
        });
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => backHandler.remove();
  }, [navigation, status]);

  const onSubmitHandler = () => {
    if (password.length < 8 || password !== confirmPassword) {
      setErrorMsg('Password should be minimum of 8 characters');
      return;
    }
    startRegister(email, password);
  };

  return [password, setPassword, confirmPassword, setConfirmPassword, errorMsg, onSubmitHandler];
};

export default ActivateAccountState;
