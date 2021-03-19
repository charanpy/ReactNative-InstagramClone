import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Touchable from '../../shared/Touchable/Touchable';
import { setModalVisibilityStart } from '../../../redux-sagas/modal/modal.action';
import {
  setMultipleStart,
  setSelectedImageStart,
} from '../../../redux-sagas/Post/Post.actions';
import UseSelectAlbum from './SelectAlbum.state';
import styles from './SelectAlbum.style';

const SelectAlbum = ({
  setModalVisibilityStart: setModal,
  setMultipleStart: setMultiple,
  setSelectedImageStart: setImage,
}) => {
  console.log('SelectAlbumName');
  const [getCamImage] = UseSelectAlbum(setImage);
  return (
    <>
      <View style={styles.SelectedImage_Container}>
        <Touchable
          TouchableComponent={TouchableOpacity}
          DisplayText={['Camera']}
          TextStyle={[styles.Set_Album_Name]}
          ViewStyle={styles.Left_Container}
          IconComponent={Ionicons}
          IconName='ios-arrow-down'
          IconSize={22}
          IconStyle={styles.Icon_Style}
          onClick={setModal}
        />
        <View style={styles.Right_Container}>
          <Touchable
            TouchableComponent={TouchableOpacity}
            ViewStyle={styles.Icon_Container}
            IconComponent={MaterialCommunityIcons}
            IconName='image-filter-none'
            IconSize={18}
            onClick={setMultiple}
          />
          <Touchable
            TouchableComponent={TouchableOpacity}
            TouchableStyle={styles.Touchable_Style}
            ViewStyle={styles.Icon_Container}
            IconComponent={MaterialCommunityIcons}
            IconName='camera-outline'
            IconSize={18}
            onClick={getCamImage}
          />
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setModalVisibilityStart: () => dispatch(setModalVisibilityStart()),
  setMultipleStart: () => dispatch(setMultipleStart()),
  setSelectedImageStart: (id, uri) =>
    dispatch(setSelectedImageStart({ id, uri })),
});

export default connect(null, mapDispatchToProps)(SelectAlbum);
