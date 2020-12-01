import React from 'react'
import { StyleSheet, View, Button, TouchableNativeFeedback } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import FooterAuth from '../../../components/FooterAuth';

const Login = () => {
     return (
          <MainContainer style={styles.Login_Container}>
               <View style={styles.Lang_Select}>
                    <TextComponent style={styles.Lang_Text}>English(United states)</TextComponent>
               </View>
               <View>
                    <View style={styles.BrandName_Container}>
                         <TextComponent
                              style={styles.Brand_Name}

                         >
                              Instagram
                         </TextComponent>
                    </View>
                    <View style={styles.TextInput_Container}>
                         <TextInputComponent
                              placeholder="Email"
                              keyboardType="email-address"
                              style={{ fontFamily: 'Nue-Light' }}
                         />
                         <TextInputComponent
                              placeholder={"Password"}
                              style={{ fontFamily: 'Nue-Light' }}


                         />

                         <TouchableNativeFeedback foreground>
                              <View style={{ alignItems: 'center', borderRadius: 5 }}>
                                   <View style={styles.Login_Button}>
                                        <TextComponent color="white" style={styles.Button}>Login</TextComponent>
                                   </View>
                              </View>

                         </TouchableNativeFeedback>
                         <View style={{ alignItems: 'center', marginTop: 15 }}>
                              <TextComponent style={styles.Forgot}>Forget your login details? <TextComponent style={styles.Forget_Bold}>Get help logging in</TextComponent> </TextComponent>
                         </View>

                    </View>
               </View>
               <View>
                    <FooterAuth>
                         <TextComponent style={styles.Footer_Text}>
                              Don't have an account?
                              <TextComponent style={styles.Signup_Link}>  Sign up</TextComponent>
                         </TextComponent>

                    </FooterAuth>
               </View>
          </MainContainer>
     )
}

export default Login


const styles = StyleSheet.create({
     Button: {
          fontFamily: 'Roboto-Regular',
          fontSize: 16
     },
     Forgot: {
          fontFamily: 'Roboto-Light',
          fontSize: 13
     },
     Forget_Bold: {
          fontFamily: 'Roboto-Regular',
          fontSize: 13
     },
     Login_Container: {
          justifyContent: 'space-between',


     },
     Login_Button: {
          width: '80%',
          padding: 10,
          alignItems: 'center',
          backgroundColor: '#4285F4',
          marginTop: 20,
          borderRadius: 5

     },
     Footer_Text: {
          fontFamily: 'Roboto-Light',
          fontSize: 15,

     },
     Signup_Link: {
          fontFamily: 'Roboto-Bold',
          fontSize: 15,
          marginLeft: 10
     },


     Lang_Select: {

          marginTop: '15%',
          textAlign: 'center',
          alignItems: 'center'

     },
     Lang_Text: {
          fontFamily: 'Proxima-Light',


     },
     Brand_Name: {
          fontFamily: 'Billabong',
          fontSize: 45
     },
     BrandName_Container: {
          alignItems: 'center'
     }
})
