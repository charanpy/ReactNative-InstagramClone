import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";

import ButtonComponent from '../../../components/ButtonComponent'

const Otp = (props) => {
     const emailForOtpConfirmation = props.navigation.getParam("emailForOtpConfirmation")
     const [otp, setOtp] = useState('')
     const [disabled, setDisabled] = useState(true)

     useEffect(() => {
          if (otp.length === 6) {
               setDisabled(false)

          } else {
               setDisabled(true)
          }
     }, [otp, disabled])

     const onSubmitHandler = () => {
          if (otp.length !== 6) {
               console.log(true)
          }
          setOtp('')
          props.navigation.navigate({
               routeName: 'ActivateAccount',
               params: {
                    emailForOtpConfirmation: emailForOtpConfirmation
               }
          })
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
                         <TextComponent style={styles.Sub_Text}>sent to <TextComponent style={{ fontWeight: 'bold' }}>{emailForOtpConfirmation}</TextComponent></TextComponent>
                    </View>
                    <View style={{ width: '100%' }}>
                         <TextInputComponent
                              placeholder="Confirmation Code"
                              keyboardType="numeric"
                              handleChange={(text) => setOtp(text)}
                              value={otp}
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

export default Otp

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
