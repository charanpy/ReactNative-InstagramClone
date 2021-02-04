import React, { useState } from 'react';
import { Image } from 'react-native';

const ProgressiveImage = (props) => {
  const { source: { uri, isStatic }, styles } = props;
  const [showDefaultImage, setDefaultImage] = useState(true);
  const setDefaultImageToFalse = () => {
    setDefaultImage(false);
  };
  console.log(showDefaultImage);
  return (
    <>
      <Image
        source={{
          uri,
          isStatic,
        }}
        style={[styles, showDefaultImage ? { display: 'none' } : { display: 'flex' }]}
        onLoadEnd={setDefaultImageToFalse}
      />
      {showDefaultImage && (
        <Image
          source={require('../../../assets/default.png')}
          style={styles}
        />
      )}
    </>
  );
};

export default ProgressiveImage;
