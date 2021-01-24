import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
// import TextComponent from './TextComponent'
import MainContainer from '../../../screens/MainContainer';

const Header = ({
  theme: themeIcon,
  Component,
  name,
  left = 0,
  right = 0,
  onClick,
}) => {
  const theme = themeIcon === 'dark' ? 'white' : 'black';

  return (
    <MainContainer style={styles.screen}>
      <TouchableNativeFeedback
        onPress={onClick}
        style={{ marginLeft: left, marginRight: right }}
      >
        <View style={{ marginLeft: left, marginRight: right }}>
          <Component name={name} size={24} color={theme} />
        </View>
      </TouchableNativeFeedback>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Header;
