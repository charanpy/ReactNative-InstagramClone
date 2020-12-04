import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, TouchableNativeFeedback } from 'react-native'
import TextComponent from './TextComponent';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectAlertMessage } from '../redux-sagas/alert/alert.selector'
import { removeAlert } from '../redux-sagas/alert/alert.action'
const AlertComponent = ({ alert, removeAlert }) => {
     console.log(100, alert.length)
     const [showAlert, setShowAlert] = useState(alert.length > 0 ? true : false)

     useEffect(() => {
          alert.length > 0
               && setShowAlert(true)
     }, [alert])

     return (
          <View style={{ flex: 1, justifyContent: 'center', position: 'absolute' }}>
               <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showAlert}

               >
                    {alert && alert.map(err => (
                         <View style={styles.Modal} key={err.id}>
                              <TextComponent style={{ fontSize: 17, fontFamily: 'Proxima-Light' }}>

                                   {err.msg}
                              </TextComponent>

                              <TouchableNativeFeedback
                                   onPress={() => {
                                        removeAlert(err.id)
                                        setShowAlert(!showAlert)
                                   }
                                   }
                              >
                                   <View style={{
                                        borderWidth: 1,
                                        borderColor: 'transparent',
                                        borderTopColor: 'rgba(66,133,244,1)',

                                        position: 'absolute', bottom: 0, width: '100%', padding: 15, alignItems: 'center'
                                   }}>


                                        <TextComponent style={{ marginTop: 10, color: 'rgba(66, 133, 244,1)', fontSize: 15, fontFamily: 'Roboto-Regular' }}>OK</TextComponent>

                                   </View>
                              </TouchableNativeFeedback>



                         </View>
                    ))}

               </Modal>

          </View>

     )
}

const mapStateToProps = createStructuredSelector({
     alert: selectAlertMessage
})

const mapDispatchToProps = dispatch => ({
     removeAlert: (id) => dispatch(removeAlert(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent)

const styles = StyleSheet.create({
     Modal: {
          width: '80%',
          height: 180,
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: 'white',
          elevation: 25,
          alignItems: 'center',
          paddingVertical: 20,
          position: 'absolute',
          top: '40%',
          left: '10%'
     }
})
