import PropTypes from 'prop-types';
import React from 'react';
import {
  KeyboardAvoidingView, TouchableNativeFeedback, View
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ButtonComponent from '../../../components/shared/Button/ButtonComponent';
import FooterAuth from '../../../components/shared/FooterAuthentication/FooterAuth';
import TextComponent from '../../../components/shared/Text/TextComponent';
import TextInputComponent from '../../../components/shared/TextInput/TextInput';
import {
  loginStart, setStatusNull
} from '../../../redux-sagas/user/user.action';
import { selectIsAuthenticated } from '../../../redux-sagas/user/user.selector';
import MainContainer from '../../MainContainer';
import styles from './Login.styles';
import UseLoginState from './LoginState';

const Login = ({
  isAuthenticated,
  setStatusNull: statusToNull,
  navigation,
  loginStart: startLogin,
}) => {
  const [
    email,
    setEmail,
    password,
    setPassword,
    onSubmitHandler,
  ] = UseLoginState(statusToNull, startLogin, isAuthenticated, navigation);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='height'
      keyboardVerticalOffset={-50}
    >
      <MainContainer style={styles.Login_Container}>
        <View style={styles.Lang_Select}>
          <TextComponent style={styles.Lang_Text}>
            English(United states)
          </TextComponent>
        </View>
        <View>
          <View style={styles.BrandName_Container}>
            <TextComponent style={styles.Brand_Name}>Instagram</TextComponent>
          </View>
          <View style={styles.TextInput_Container}>
            <TextInputComponent
              placeholder='Email'
              keyboardType='email-address'
              handleChange={(text) => setEmail(text)}
              style={{ fontFamily: 'Nue-Light' }}
              value={email}
            />
            <TextInputComponent
              placeholder='Password'
              handleChange={(text) => setPassword(text)}
              value={password}
              textContentType='password'
              secureTextEntry={!password.length <= 0}
              style={{ fontFamily: 'Nue-Light' }}
            />

            <ButtonComponent
              disableButton={!email || !password}
              onPressButton={onSubmitHandler}
              title='login'
            />
            <View
              style={styles.Forgot_Container}
            >
              <TouchableNativeFeedback>
                <View>
                  <TextComponent style={styles.Forgot}>
                    Forget your login details?
                    <TextComponent style={styles.Forget_Bold}>
                      Get help logging in
                    </TextComponent>
                  </TextComponent>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
        <View>
          <FooterAuth
            navigate={() => navigation.navigate('Register')}
            footerText="Don't have an account?"
            footerTextLink='Sign up'
          />
        </View>
      </MainContainer>
    </KeyboardAvoidingView>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setStatusNull: PropTypes.func.isRequired,
  loginStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  setStatusNull: () => dispatch(setStatusNull()),
  loginStart: (email, password) => dispatch(loginStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
