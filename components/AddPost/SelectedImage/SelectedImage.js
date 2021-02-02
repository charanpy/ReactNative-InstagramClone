import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDefaultPhoto } from '../../../redux-sagas/Post/Post.selector';
import styles from './SelectedImage.style';

const SelectedImage = ({
  defaultPhoto: photo
}) => {
  return (
    <View style={styles.Selected_Image}>
      <Image
        loadingIndicatorSource={{ uri: require('../../../assets/default.png') }}
        source={{
          uri: photo && photo,
          isStatic: true,
        }}
        style={styles.Image}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  defaultPhoto: selectDefaultPhoto
});

export default connect(mapStateToProps)(SelectedImage);
