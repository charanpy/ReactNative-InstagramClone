import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextComponent from './TextComponent';
import IconComponent from './Icon';

const PostHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.Post_Header}>
        <View style={styles.Post_LeftContainer}>
          <IconComponent Component={Ionicons} name='md-close' size={25} />
          <TextComponent style={styles.Post_Text}>Add Post</TextComponent>
        </View>
        <View style={styles.Post_RightContainer}>
          <View style={{ marginRight: '8%' }}>
            <Ionicons name='md-checkmark' size={28} color='blue' />
          </View>
        </View>
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
    marginTop: '5%'
  },
  Post_LeftContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  Post_RightContainer: {
    width: '50%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  Post_Text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 21,
  },
});
