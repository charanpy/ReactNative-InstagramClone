import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDefaultPhoto } from '../../../redux-sagas/Post/Post.selector';
import ProgressiveImage from '../../shared/Image/Image';
import * as Style from './SelectedImage.style';

const SelectedImage = ({
  defaultPhoto: photo
}) => {
  return (
    <View style={Style.default.Selected_Image}>
      <ProgressiveImage
        source={{
          uri: photo && photo,
          isStatic: true,
        }}
        styles={Style.default.Image}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  defaultPhoto: selectDefaultPhoto
});

export default connect(mapStateToProps)(SelectedImage);
