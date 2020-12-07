import React, { useState, useEffect } from 'react'
import { StyleSheet, View, BackHandler, TouchableNativeFeedback, KeyboardAvoidingView } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import ButtonComponent from '../../../components/ButtonComponent'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { registerStart } from '../../../redux-sagas/user/user.action'
import { selectEmail, selectStatus, selectApiCallSuccess } from '../../../redux-sagas/user/user.selector'
const AccountActivate = ({ status, registerStart, email, navigation, success, setSuccessFalse }) => {

     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [disabled, setDisabled] = useState(true)
     const [errorMsg, setErrorMsg] = useState('')

     useEffect(() => {
          const handleBackButton = () => {

               if (status === 'Registered') {
                    navigation.navigate("Login")
               } else {
                    navigation.navigate({
                         routeName: "ConfirmScreen",
                         params: {
                              navigation: 'ActivateAccount'
                         }
                    })
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

          if (password.length >= 8 && confirmPassword.length >= 8) {
               setErrorMsg('')
          }
     }, [disabled, password, confirmPassword])

     const onSubmitHandler = () => {
          if (password.length < 8 || password !== confirmPassword) {

               setErrorMsg("Password should be minimum of 8 characters")
               return;
          }
          registerStart(email, password)
     }

     return (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={-100}>

               <MainContainer>
                    <View style={styles.Activation_Container}>
                         <TextComponent style={styles.Header}>
                              PASSWORD
               </TextComponent>
                         <TextInputComponent
                              placeholder="Password"
                              handleChange={(text) => setPassword(text)}
                              value={password}
                              secureTextEntry={password.length <= 0 ? false : true}


                         />
                         <TextInputComponent
                              placeholder="Confirm Password"
                              handleChange={(text) => setConfirmPassword(text)}
                              value={confirmPassword}
                              secureTextEntry={true}
                              secureTextEntry={confirmPassword.length <= 0 ? false : true}


                         />

                         {status === 'Registered' &&
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
                         <View>
                              <TextComponent color="red" style={styles.Alert}>
                                   {errorMsg}
                              </TextComponent>
                         </View>

                    </View>
               </MainContainer>
          </KeyboardAvoidingView>
     )
}

const mapStateToProps = createStructuredSelector({
     email: selectEmail,
     success: selectApiCallSuccess,
     status: selectStatus
})

const mapDispatchToProps = dispatch => ({
     registerStart: (email, password) => dispatch(registerStart({ email, password })),
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
     Alert: {
          fontSize: 15,
          marginVertical: 15,
          fontFamily: 'Nue-Regular'
     }
})
