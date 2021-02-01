import { useEffect, useCallback } from 'react';
import UseBackHandler from '../../../helper/utils/CustomBackHandler';

const PostScreenState = (askPermission, navigation, hasPermission, emptyMedia) => {
  console.log(hasPermission);

  useEffect(() => {
    askPermission();
  }, [askPermission]);

  useEffect(() => {
    const blur = navigation.addListener('didFocus', () => {
      console.log('focus');
      if (!hasPermission) askPermission();
    });
    return () => {
      console.log('unfocus');
      blur.remove();
    };
  }, [navigation, hasPermission, askPermission]);

   const clearUpDataOnUnMount = useCallback(() => {
    emptyMedia();
  }, [emptyMedia]);
  UseBackHandler(clearUpDataOnUnMount);
};

export default PostScreenState;
