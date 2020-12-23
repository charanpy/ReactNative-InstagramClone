import React, { useEffect } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
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
  setThemeLightStart: setLightTheme,
  setThemeStart: setDarkTheme,
  loadUserStart: loadUser,
  signOutStart: signOut,
  isAuthenticated,
  navigation,
}) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Auth');
    }
  }, [isAuthenticated, navigation]);

  return (
    <MainContainer style={{ flex: 1, justifyContent: 'center' }}>
      <TextComponent>Home</TextComponent>
      <TouchableNativeFeedback foreground onPress={() => signOut()}>
        <View>
          <TextComponent>Logout</TextComponent>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => setDarkTheme()}>
        <View style={{ marginVertical: 30 }}>
          <TextComponent>Dark Theme</TextComponent>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => setLightTheme()}>
        <View>
          <TextComponent>LightTheme</TextComponent>
        </View>
      </TouchableNativeFeedback>
    </MainContainer>
  );
};

HomeScreen.propTypes = {
  setThemeLightStart: PropTypes.func.isRequired,
  setThemeStart: PropTypes.func.isRequired,
  loadUserStart: PropTypes.func.isRequired,
  signOutStart: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
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
