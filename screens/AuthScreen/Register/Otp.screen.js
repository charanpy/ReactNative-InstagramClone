import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import MainContainer from '../../MainContainer';
import TextComponent from '../../../components/shared/Text/TextComponent';
import TextInputComponent from '../../../components/shared/TextInput/TextInput';
import ButtonComponent from '../../../components/shared/Button/ButtonComponent';
import {
  setSuccessFalse,
  verifyOtpStart,
} from '../../../redux-sagas/user/user.action';
import {
  selectStatus,
  selectEmail,
} from '../../../redux-sagas/user/user.selector';
import UseOtpState from './helper/OtpState';
import styles from './styles/Register.style';

const Otp = ({
  status, navigation, verifyOtpStart: verifyOtp,
  email
}) => {
  const [OtpVerify, setOtp, onSubmitHandler] = UseOtpState(status, navigation, verifyOtp);
  return (
    <MainContainer>
      <View style={styles.Otp_Confirmation}>
        <TextComponent style={styles.Header}>
          ENTER CONFIRMATION CODE
        </TextComponent>
        <TextComponent style={styles.Sub_Text}>
          Enter the confirmation code that we have
        </TextComponent>
        <View style={{ alignItems: 'center' }}>
          <TextComponent style={styles.Sub_Text}>
            sent to
            <TextComponent style={{ fontWeight: 'bold' }}>
              {email}
            </TextComponent>
          </TextComponent>
        </View>
        <View style={{ width: '100%' }}>
          <TextInputComponent
            placeholder='Confirmation Code'
            keyboardType='numeric'
            handleChange={(text) => setOtp(text)}
            value={OtpVerify}
          />
        </View>
        <ButtonComponent
          disableButton={OtpVerify.length < 5}
          onPressButton={onSubmitHandler}
          title='Submit'
        />
      </View>
    </MainContainer>
  );
};

Otp.prototypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  setSuccessFalse: PropTypes.func.isRequired,
  verifyOtpStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: selectEmail,
  status: selectStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setSuccessFalse: () => dispatch(setSuccessFalse()),
  // eslint-disable-next-line no-shadow
  verifyOtpStart: (Otp) => dispatch(verifyOtpStart({ Otp })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
