import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import TextComponent from '../Text/TextComponent';

const FooterAuth = ({ navigate, footerText, footerTextLink }) => {
  return (
    <View style={styles.Footer}>
      <TouchableNativeFeedback
        // useForeground={false}
        onPress={navigate}
      >
        <View>
          <TextComponent style={styles.Footer_Text}>
            {footerText}
            <TextComponent style={styles.Signup_Link}>
              {footerTextLink}
            </TextComponent>
          </TextComponent>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FooterAuth;

const styles = StyleSheet.create({
  Footer: {
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopColor: '#999',
    borderWidth: 0.7,
    borderBottomColor: 'white',
  },
  Footer_Text: {
    fontFamily: 'Roboto-Light',
    fontSize: 15,
  },
  Signup_Link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginLeft: 10,
  },
});
