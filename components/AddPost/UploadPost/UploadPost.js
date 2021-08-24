import React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { addPostStart } from '../../../redux-sagas/Post/Post.actions';

import ButtonComponent from '../../shared/Button/ButtonComponent';
import TextInputComponent from '../../shared/TextInput/TextInput';
import useUploadPost from './UploadPost.state';
import styles from './UploadPost.style';

const UploadPost = ({ images, addPostStart: uploadImage, navigation }) => {
  const [caption, setCaption, submitHandler] = useUploadPost(
    uploadImage,
    navigation
  );
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: images.length && images[0],
          isStatic: true,
        }}
        style={{ width: 100, height: 100 }}
        resizeMode='cover'
      />
      <TextInputComponent
        placeholder='Add Caption'
        keyboardType='email-address'
        handleChange={(text) => setCaption(text)}
        value={caption}
      />
      <ButtonComponent
        title='Upload Post'
        onPressButton={() => submitHandler(caption, images)}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPostStart: (images) => dispatch(addPostStart({ images })),
});

export default connect(null, mapDispatchToProps)(UploadPost);
