import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MainContainer from '../MainContainer';
import TextComponent from '../../components/TextComponent';
import {
  loadUserStart,
  signOutStart,
} from '../../redux-sagas/user/user.action';
import { selectIsAuthenticated } from '../../redux-sagas/user/user.selector';
import { getTheme } from '../../helper/utils/token';
import {
  setThemeStart,
  setThemeLightStart,
} from '../../redux-sagas/theme/theme.action';

const HomeScreen = ({
  setThemeLightStart,
  setThemeStart,
  loadUserStart,
  signOutStart,
  isAuthenticated,
  navigation,
}) => {
  useEffect(() => {
    loadUserStart();
  }, []);
  const data = getTheme().then((res) => res);
  console.log(data);
  useEffect(() => {
    !isAuthenticated && navigation.navigate('Auth');
  }, [isAuthenticated]);

  return (
    <MainContainer style={{ flex: 1, justifyContent: 'center' }}>
      <TextComponent>Home</TextComponent>
      <TouchableNativeFeedback foreground onPress={() => signOutStart()}>
        <View>
          <TextComponent>Logout</TextComponent>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => setThemeStart()}>
        <View style={{ marginVertical: 30 }}>
          <TextComponent>Dark Theme</TextComponent>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => setThemeLightStart()}>
        <View>
          <TextComponent>LightTheme</TextComponent>
        </View>
      </TouchableNativeFeedback>
    </MainContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserStart: () => dispatch(loadUserStart()),
  signOutStart: () => dispatch(signOutStart()),
  setThemeStart: () => dispatch(setThemeStart()),
  setThemeLightStart: () => dispatch(setThemeLightStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

HomeScreen.navigationOptions = {
  headerTitle: 'd',
};

const styles = StyleSheet.create({});
