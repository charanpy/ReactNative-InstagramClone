import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const CustomBackHandler = (onUnmount) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onUnmount
    );
    return () => backHandler.remove();
  }, [onUnmount]);
};

export default CustomBackHandler;
