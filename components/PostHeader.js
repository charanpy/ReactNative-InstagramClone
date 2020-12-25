import React from 'react';
import {
  StyleSheet, View, SafeAreaView, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextComponent from './TextComponent';
import IconComponent from './Icon';

const PostHeader = ({ onClick, navigation }) => {
  const handleCancelButton = () => {
    onClick();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <View style={styles.Post_Header}>
        <TouchableOpacity onPress={handleCancelButton} style={{ width: '50%' }}>
          <View style={styles.Post_LeftContainer}>
            <IconComponent Component={Ionicons} name='md-close' size={25} />
            <TextComponent style={styles.Post_Text}>Add Post</TextComponent>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '50%' }}>
          <View style={styles.Post_RightContainer}>
            <View style={{ marginRight: '8%' }}>
              <Ionicons name='md-checkmark' size={28} color='blue' />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  Post_Header: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: '2%',
  },
  Post_LeftContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  Post_RightContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  Post_Text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 21,
  },
});
