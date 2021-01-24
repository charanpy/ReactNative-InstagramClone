import { useState, useEffect } from 'react';

const LoginState = (statusToNull, startLogin, isAuthenticated, navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    statusToNull();
  }, [statusToNull]);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('App');
    }
  }, [isAuthenticated, navigation]);

  const onSubmitHandler = () => {
    if (email.length <= 0 || password.length <= 0) {
      return;
    }
    startLogin(email, password);
  };

  return [email, setEmail, password, setPassword, onSubmitHandler];
};

export default LoginState;
