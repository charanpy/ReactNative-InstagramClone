import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import FooterAuth from '../../../components/FooterAuth';
//import { CommonStyles } from "../../../styles/Common.styles"
import GoBack from '../../../components/GoBack'
import ButtonComponent from '../../../components/ButtonComponent';
const Login = (props) => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [ButtonDisable, setButtonDisable] = useState(true);

     useEffect(() => {
          if (email.length > 0 && password.length > 0) {
               setButtonDisable(false)
          } else if (!password || !email) {
               setButtonDisable(true)
          }
     }, [email, password, ButtonDisable])

     console.log(1, ButtonDisable, email, password)

     const onSubmitHandler = () => {
          if (email.length <= 0 || password.length <= 0) {
               console.log(true)
          }
          setEmail('');
          setPassword('')

     }



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
                              handleChange={(text) => setEmail(text)}
                              style={{ fontFamily: 'Nue-Light' }}
                              value={email}
                         />
                         <TextInputComponent
                              placeholder={"Password"}
                              style={{ fontFamily: 'Nue-Light' }}
                              handleChange={(text) => setPassword(text)}
                              value={password}
                         />

                         <ButtonComponent
                              disableButton={ButtonDisable}
                              onPressButton={onSubmitHandler}
                              title="login"

                         />

                         <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                              <TouchableNativeFeedback>
                                   <View>
                                        <TextComponent style={styles.Forgot}>Forget your login details?
                              <TextComponent style={styles.Forget_Bold}>  Get help logging in</TextComponent>
                                        </TextComponent>
                                   </View>
                              </TouchableNativeFeedback>
                         </View>
                    </View>
               </View>
               <View>
                    <FooterAuth
                         navigate={() => props.navigation.navigate("Register")}
                         footerText="Don't have an account?"
                         footerTextLink="Sign up"
                    />
               </View>
          </MainContainer >
     )
}

export default Login


const styles = StyleSheet.create({

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
