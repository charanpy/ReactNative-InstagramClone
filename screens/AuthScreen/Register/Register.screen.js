import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import FooterAuth from '../../../components/FooterAuth';
import { AntDesign } from '@expo/vector-icons'
import { CommonStyles } from "../../../styles/Common.styles"
import ButtonComponent from "../../../components/ButtonComponent";

const Register = (props) => {
     const [email, setEmail] = useState('');
     const [disabled, setDisabled] = useState(true)

     useEffect(() => {
          if (email.length > 0) {
               setDisabled(false)
          } else if (email.length <= 0) {
               setDisabled(true)
          }
     }, [email, disabled])

     const onSubmitHandler = () => {
          if (!typeof email === 'string' || email.length <= 0) {
               console.log(true)
          }

          setEmail('')
          props.navigation.navigate({
               routeName: 'Otp',
               params: {
                    emailForOtpConfirmation: email
               }
          })
     }

     return (
          <MainContainer style={styles.Register_Container}>
               <View>
                    <AntDesign name="user" size={80} color={"#212529"} />
               </View>
               <View
                    style={{ width: '100%' }}
               >
                    <TextInputComponent
                         placeholder="Email"
                         keyboardType="email-address"
                         handleChange={(text) => setEmail(text)}
                         value={email}

                    />
               </View>

               <ButtonComponent
                    disableButton={disabled}
                    onPressButton={onSubmitHandler}
                    title="Register"
               />
               <FooterAuth
                    navigate={() => props.navigation.navigate("Login")}
                    footerText="Already have an account?"
                    footerTextLink="Login"

               />
          </MainContainer>
     )
}

export default Register



const styles = StyleSheet.create({
     Register_Container: {
          justifyContent: 'center',
          alignItems: 'center'
     }
})
