import React, { useEffect, useState } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import MainContainer from '../../MainContainer';
import TextComponent from '../../../components/TextComponent';
import TextInputComponent from '../../../components/TextInput';
import ButtonComponent from '../../../components/ButtonComponent';
import {
  setSuccessFalse,
  verifyOtpStart,
} from '../../../redux-sagas/user/user.action';
import {
  selectStatus,
  selectEmail,
} from '../../../redux-sagas/user/user.selector';

const Otp = ({
  status, navigation, verifyOtpStart: verifyOtp,
  email
}) => {
  const [OtpVerify, setOtp] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (status === 'GetPassword') {
      navigation.navigate('ActivateAccount');
    } else if (status === null) {
      navigation.navigate('Login');
    }
  }, [status, navigation]);

  useEffect(() => {
    const handleBackButton = () => {
      navigation.navigate({
        routeName: 'ConfirmScreen',
        params: {
          navigation: 'Otp',
        },
      });

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    if (OtpVerify.length >= 5) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [OtpVerify, disabled]);

  const onSubmitHandler = () => {
    if (OtpVerify.length !== 6) {
      console.log(true);
    }
    verifyOtp(OtpVerify);
    setOtp('');
  };

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
          disableButton={disabled}
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

const styles = StyleSheet.create({
  Otp_Confirmation: {
    marginVertical: '20%',
    alignItems: 'center',
  },
  Header: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    marginBottom: 20,
  },
  Sub_Text: {
    fontSize: 15,
    marginBottom: 7,
    fontFamily: 'Roboto-Light',
  },
});
