import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import EmailValidator from './utils/EmailValidation';

const RegisterState = (sendEmail, status, navigation) => {
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState({
    error: null,
  });

  useEffect(() => {
    if (status === 'GetOtp') {
      navigation.navigate({
        routeName: 'Otp',
      });
    }
    setEmail('');
  }, [status, navigation]);

  const { error } = emailValidation;
  const [value] = useState(new Animated.Value(0));

  const slideErrorMsg = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const onSubmitHandler = () => {
    const IsEmailValid = EmailValidator(email);
    if (!IsEmailValid) {
      slideErrorMsg();
      console.log('err');
      setEmailValidation({
        error: 'Please enter a valid Gmail',
      });
    } else {
      sendEmail(email);
    }
  };

  return [email, setEmail, onSubmitHandler, error, value];
};

export default RegisterState;
