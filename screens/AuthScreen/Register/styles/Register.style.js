import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Register Screen
  Register_Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Alert: {
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Nue-Regular',
  },
  // OtpScreen
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
  // Activate Account
  Activation_Container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  HeaderAcc: {
    fontSize: 21,
    fontFamily: 'Proxima-Regular',
  },
  Forgot: {
    fontFamily: 'Roboto-Light',
    fontSize: 13,
  },
  Forget_Bold: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  AlertAcc: {
    fontSize: 15,
    marginVertical: 15,
    fontFamily: 'Nue-Regular',
  },
  RegisterSuccess: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  }
});

export default styles;
