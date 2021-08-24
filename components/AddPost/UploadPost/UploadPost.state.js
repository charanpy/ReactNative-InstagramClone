import { useState } from 'react';

const useUploadPost = (uploadImage, navigation) => {
  const [caption, setCaption] = useState('');

  const submitHandler = (captionData, images) => {
    const formData = new FormData();
    Object.keys(images).forEach((image) => {
      const name = images[image].slice(images[image].lastIndexOf('/') + 1);
      const type = `image/${images[image].split('.')[1]}`;
      formData.append('image', {
        name,
        type,
        uri: images[image],
      });
    });
    formData.append('caption', captionData);

    uploadImage(formData);
    navigation.navigate('home');
  };

  return [caption, setCaption, submitHandler];
};

export default useUploadPost;
