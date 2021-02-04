import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { getAllAlbumNameStart } from '../../../redux-sagas/Post/Post.actions';
import UseSelectAlbum from './SelectAlbum.state';
import Touchable from '../../shared/Touchable/Touchable';
import styles from './SelectAlbum.style';

const SelectAlbum = ({ getAllAlbumNameStart: getAlbumNames }) => {
  UseSelectAlbum(getAlbumNames);
  console.log('SelectAlbumName');
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
        />
        <View style={styles.Right_Container}>
          <Touchable
            TouchableComponent={TouchableOpacity}
            ViewStyle={styles.Icon_Container}
            IconComponent={MaterialCommunityIcons}
            IconName='image-filter-none'
            IconSize={18}
          />
          <Touchable
            TouchableComponent={TouchableOpacity}
            TouchableStyle={styles.Touchable_Style}
            ViewStyle={styles.Icon_Container}
            IconComponent={MaterialCommunityIcons}
            IconName='camera-outline'
            IconSize={18}
          />
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllAlbumNameStart: () => dispatch(getAllAlbumNameStart()),
});

export default connect(null, mapDispatchToProps)(SelectAlbum);
