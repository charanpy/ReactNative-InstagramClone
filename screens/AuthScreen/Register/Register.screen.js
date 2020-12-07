import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, View, KeyboardAvoidingView } from 'react-native'
import MainContainer from "../../MainContainer";
import TextComponent from "../../../components/TextComponent"
import TextInputComponent from "../../../components/TextInput";
import FooterAuth from '../../../components/FooterAuth';
import { AntDesign } from '@expo/vector-icons'
import ButtonComponent from "../../../components/ButtonComponent";
import { sendEmailConfirmationStart } from "../../../redux-sagas/user/user.action"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectColor } from '../../../redux-sagas/theme/theme.selector'
import { selectApiCallSuccess, selectStatus } from "../../../redux-sagas/user/user.selector"
const Register = (props) => {
     const [email, setEmail] = useState('');
     const [disabled, setDisabled] = useState(true)
     const [emailValidation, setEmailValidation] = useState({
          error: null,

     })
     const { error } = emailValidation;
     const [value] = useState(new Animated.Value(0))
     useEffect(() => {

          if (email.length > 0) {
               setDisabled(false)
          } else if (email.length <= 0) {
               setDisabled(true)
          }

     }, [email, disabled])

     useEffect(() => {

          if (props.status === 'GetOtp') {
               props.navigation.navigate({
                    routeName: 'Otp',

               }
               )
          }
          setEmail('')
     }, [props.status])


     const slideErrorMsg = () => {
          Animated.timing(value, {
               toValue: 1,
               duration: 2000,
               useNativeDriver: false
          }).start()
     }

     const onSubmitHandler = async () => {
          let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (!typeof email === 'string' ||
               email.length <= 0 ||
               !email.match(mailFormat)
          ) {
               slideErrorMsg()

               console.log('err')
               setEmailValidation({

                    error: 'Please enter a valid Gmail',
               })
               return;
          }
          !error && props.sendEmailConfirmationStart(email)
          setEmailValidation({
               isValidated: false,
               error: null
          })
     }

     return (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={-50}>
               <MainContainer style={styles.Register_Container}>

                    <View>
                         <AntDesign name="user" size={80} color={props.color} />
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
                         onPressButton={
                              onSubmitHandler

                         }
                         title="Register"

                    />
                    {error && (
                         <Animated.View
                              style={{
                                   opacity: value
                              }}
                         >
                              <View>
                                   <TextComponent color="red" style={styles.Alert}>
                                        {error}
                                   </TextComponent>
                              </View>
                         </Animated.View>

                    )}
                    <FooterAuth
                         navigate={() => props.navigation.navigate("Login")}
                         footerText="Already have an account?"
                         footerTextLink="Login"

                    />
               </MainContainer>
          </KeyboardAvoidingView>
     )
}

const mapStateToProps = createStructuredSelector({
     success: selectApiCallSuccess,
     status: selectStatus,
     color: selectColor
})

const mapDispatchToProps = dispatch => ({
     sendEmailConfirmationStart: (email) => dispatch(sendEmailConfirmationStart({ email })),
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)






const styles = StyleSheet.create({
     Register_Container: {
          justifyContent: 'center',
          alignItems: 'center'
     },
     Alert: {
          fontSize: 15,
          marginTop: 20,
          fontFamily: 'Nue-Regular'
     }
})
