import React, { useEffect, useState } from 'react'
import { StyleSheet, View, BackHandler, Alert, Modal } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import AccountActivate from './AccountActivate'
import ButtonComponent from '../../../components/ButtonComponent'
import { connect } from 'react-redux';
import { setSuccessFalse, verifyOtpStart } from "../../../redux-sagas/user/user.action"
import { selectApiCallSuccess, selectStatus, selectEmail } from "../../../redux-sagas/user/user.selector"
import { createStructuredSelector } from "reselect"

const Otp = (props) => {
     const [Otp, setOtp] = useState('')
     const [disabled, setDisabled] = useState(true)

     useEffect(() => {
          if (props.status === 'GetPassword') {
               props.navigation.navigate("ActivateAccount")
          } else if (props.status === null) {
               props.navigation.navigate("Login")

          }
     }, [props.status])

     useEffect(() => {
          const handleBackButton = () => {
               props.navigation.navigate({
                    routeName: "ConfirmScreen",
                    params: {
                         navigation: 'Otp'
                    }
               });

               return true;
          }

          const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton)
          return () => backHandler.remove();
     }, []);


     useEffect(() => {
          if (Otp.length >= 5) {
               setDisabled(false)

          } else {
               setDisabled(true)
          }
     }, [Otp, disabled])

     const onSubmitHandler = () => {
          if (Otp.length !== 6) {
               console.log(true)
          }
          props.verifyOtpStart(Otp)
          setOtp('')

     }




     return (
          <MainContainer >
               <View style={styles.Otp_Confirmation}>
                    <TextComponent style={styles.Header}>
                         ENTER CONFIRMATION CODE
               </TextComponent>
                    <TextComponent style={styles.Sub_Text}>
                         Enter the confirmation code that we have
               </TextComponent>
                    <View style={{ alignItems: 'center' }}>
                         <TextComponent style={styles.Sub_Text}>sent to
                         <TextComponent style={{ fontWeight: 'bold' }}> {props.email}</TextComponent></TextComponent>
                    </View>
                    <View style={{ width: '100%' }}>
                         <TextInputComponent
                              placeholder="Confirmation Code"
                              keyboardType="numeric"
                              handleChange={(text) => setOtp(text)}
                              value={Otp}
                         />
                    </View>
                    <ButtonComponent
                         disableButton={disabled}
                         onPressButton={onSubmitHandler}
                         title="Submit"
                    />
               </View>
          </MainContainer>
     )
}

const mapStateToProps = createStructuredSelector({
     success: selectApiCallSuccess,
     email: selectEmail,
     status: selectStatus
})

const mapDispatchToProps = dispatch => ({

     setSuccessFalse: () => dispatch(setSuccessFalse()),
     verifyOtpStart: (Otp) => dispatch(verifyOtpStart({ Otp }))

})

export default connect(mapStateToProps, mapDispatchToProps)(Otp)

const styles = StyleSheet.create({
     Otp_Confirmation: {
          marginVertical: '20%',
          alignItems: 'center'
     },
     Header: {
          fontFamily: 'Roboto-Regular',
          fontSize: 18,
          marginBottom: 20
     },
     Sub_Text: {
          fontSize: 15,
          marginBottom: 7,
          fontFamily: 'Roboto-Light'
     }
})
