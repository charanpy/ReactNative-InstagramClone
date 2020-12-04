import React, { useState, useEffect } from 'react'
import { StyleSheet, View, BackHandler, TouchableNativeFeedback } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import ButtonComponent from '../../../components/ButtonComponent'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { registerStart, setSuccessFalse } from '../../../redux-sagas/user/user.action'
import { selectEmail, selectApiCallSuccess } from '../../../redux-sagas/user/user.selector'
const AccountActivate = ({ registerStart, email, navigation, success, setSuccessFalse }) => {
     useEffect(() => {
          setSuccessFalse()
     }, [])

     console.log(navigation)
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [disabled, setDisabled] = useState(true)

     useEffect(() => {
          const handleBackButton = () => {
               //g
               if (!success) {
                    navigation.pop()
                    navigation.navigate({
                         routeName: "ConfirmScreen",
                         params: {
                              navigation: 'AccountActivate'
                         }
                    });
               } else {
                    navigation.pop()
                    navigation.navigate({
                         routeName: "Register",

                    });
               }
               return true;
          }

          const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton)
          return () => backHandler.remove();
     }, []);


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
          registerStart(email, password)
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

                    {success &&
                         <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                              <TouchableNativeFeedback
                                   onPress={() => navigation.navigate("Login")}
                              >
                                   <View>
                                        <TextComponent style={styles.Forgot}>Registered Successfully!
                    <TextComponent style={styles.Forget_Bold}> Login</TextComponent>
                                        </TextComponent>
                                   </View>
                              </TouchableNativeFeedback>
                         </View>

                    }

                    <ButtonComponent
                         title="Submit"
                         disableButton={disabled}
                         onPressButton={onSubmitHandler}
                    />


               </View>
          </MainContainer>
     )
}

const mapStateToProps = createStructuredSelector({
     email: selectEmail,
     success: selectApiCallSuccess
})

const mapDispatchToProps = dispatch => ({
     registerStart: (email, password) => dispatch(registerStart({ email, password })),
     setSuccessFalse: () => dispatch(setSuccessFalse())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivate)

const styles = StyleSheet.create({
     Activation_Container: {

          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
     },
     Header: {
          fontSize: 21,
          fontFamily: 'Proxima-Regular'
     },
     Forgot: {
          fontFamily: 'Roboto-Light',
          fontSize: 13
     },
     Forget_Bold: {
          fontFamily: 'Roboto-Regular',
          fontSize: 13
     },
})
