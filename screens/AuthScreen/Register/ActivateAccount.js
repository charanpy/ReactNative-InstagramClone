import React from 'react';
import {
  View,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import MainContainer from '../../MainContainer';
import TextComponent from '../../../components/shared/Text/TextComponent';
import TextInputComponent from '../../../components/shared/TextInput/TextInput';
import ButtonComponent from '../../../components/shared/Button/ButtonComponent';
import { registerStart } from '../../../redux-sagas/user/user.action';
import {
  selectEmail,
  selectStatus,
} from '../../../redux-sagas/user/user.selector';
import UseActivateAccountState from './helper/ActivateAccountState';
import styles from './styles/Register.style';

const AccountActivate = ({
  status,
  registerStart: startRegister,
  email,
  navigation,
}) => {
  const [
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMsg,
    onSubmitHandler,
  ] = UseActivateAccountState(status, navigation, startRegister, email);
  return (
    <MainContainer style={{ flex: 1 }}>
      <View style={styles.Activation_Container}>
        <TextComponent style={styles.HeaderAcc}>PASSWORD</TextComponent>
        <TextInputComponent
          placeholder='Password'
          handleChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!password.length <= 0}
        />
        <TextInputComponent
          placeholder='Confirm Password'
          handleChange={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={!confirmPassword.length <= 0}
        />

        {status === 'Registered' && (
          <View
            style={styles.RegisterSuccess}
          >
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Login')}
            >
              <View>
                <TextComponent style={styles.Forgot}>
                  Registered Successfully!
                  <TextComponent style={styles.Forget_Bold}>
                    Login
                  </TextComponent>
                </TextComponent>
              </View>
            </TouchableNativeFeedback>
          </View>
        )}

        <ButtonComponent
          title='Submit'
          disableButton={password !== confirmPassword}
          onPressButton={onSubmitHandler}
        />
        <View>
          <TextComponent color='red' style={styles.AlertAcc}>
            {errorMsg}
          </TextComponent>
        </View>
      </View>
    </MainContainer>
  );
};

AccountActivate.prototype = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  registerStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail,
  status: selectStatus,
});

const mapDispatchToProps = (dispatch) => ({
  registerStart: (email, password) => dispatch(registerStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivate);
