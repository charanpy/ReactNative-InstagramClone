import React from 'react';
import {
  Animated, View, KeyboardAvoidingView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './styles/Register.style';
import MainContainer from '../../MainContainer';
import TextComponent from '../../../components/TextComponent';
import TextInputComponent from '../../../components/TextInput';
import FooterAuth from '../../../components/FooterAuth';
import ButtonComponent from '../../../components/ButtonComponent';
import { sendEmailConfirmationStart } from '../../../redux-sagas/user/user.action';
import { selectColor } from '../../../redux-sagas/theme/theme.selector';
import {
  selectApiCallSuccess,
  selectStatus,
} from '../../../redux-sagas/user/user.selector';
import useRegisterState from './helper/RegisterState';

const Register = ({
  status,
  color,
  navigation,
  sendEmailConfirmationStart: sendEmail,
}) => {
  const [email, setEmail, onSubmitHandler, error, value] = useRegisterState(
    sendEmail,
    status,
    navigation
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='height'
      keyboardVerticalOffset={-50}
    >
      <MainContainer style={styles.Register_Container}>
        <View>
          <AntDesign name='user' size={80} color={color} />
        </View>
        <View style={{ width: '100%' }}>
          <TextInputComponent
            placeholder='Email'
            keyboardType='email-address'
            handleChange={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <ButtonComponent
          disableButton={!email.length > 0}
          onPressButton={onSubmitHandler}
          title='Register'
        />
        {error && (
          <Animated.View
            style={{
              opacity: value,
            }}
          >
            <View>
              <TextComponent color='red' style={styles.Alert}>
                {error}
              </TextComponent>
            </View>
          </Animated.View>
        )}
        <FooterAuth
          navigate={() => navigation.navigate('Login')}
          footerText='Already have an account?'
          footerTextLink='Login'
        />
      </MainContainer>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = createStructuredSelector({
  success: selectApiCallSuccess,
  status: selectStatus,
  color: selectColor,
});

const mapDispatchToProps = (dispatch) => ({
  sendEmailConfirmationStart: (email) => dispatch(sendEmailConfirmationStart({ email })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
