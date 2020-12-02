import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import ButtonComponent from '../../../components/ButtonComponent'


const AccountActivate = () => {
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [disabled, setDisabled] = useState(true)
     console.log(disabled)
     useEffect(() => {
          if (password && password === confirmPassword) {
               setDisabled(false)
          } else {
               setDisabled(true)
          }
     }, [disabled, password, confirmPassword])

     const onSubmitHandler = () => {
          if (!password.length < 8 || password !== confirmPassword) {
               console.log(true)
          }
     }

     return (
          <MainContainer>
               <View style={styles.Activation_Container}>
                    <TextComponent style={styles.Header}>
                         PASSWORD
               </TextComponent>
                    <TextInputComponent
                         placeholder="Password"
                         handleChange={(text) => setPassword(text)}
                         value={password}
                    />
                    <TextInputComponent
                         placeholder="Confirm Password"
                         handleChange={(text) => setConfirmPassword(text)}
                         value={confirmPassword}
                    />
                    <ButtonComponent
                         title="Submit"
                         disableButton={disabled}
                         onPressButton={onSubmitHandler}
                    />


               </View>
          </MainContainer>
     )
}

export default AccountActivate

const styles = StyleSheet.create({
     Activation_Container: {

          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
     },
     Header: {
          fontSize: 21,
          fontFamily: 'Proxima-Regular'
     }
})
