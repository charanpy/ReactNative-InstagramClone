import React, { useEffect } from 'react'
import { StyleSheet, BackHandler, View } from 'react-native'
import GoBack from '../components/GoBack'
const ConfirmScreen = (props) => {
     console.log(props.navigation.getParam("navigation"))

     useEffect(() => {
          const handleBackButton = () => {
               //g
               props.navigation.navigate("ConfirmScreen");

               return true;
          }

          const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton)
          return () => backHandler.remove();
     }, []);


     return (
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
               <GoBack
                    onCancelClick={() => props.navigation.navigate(props.navigation.getParam("navigation"))}
                    onOkClick={() => props.navigation.navigate("Register")}
                    onPop={() => props.navigation.pop()}
               />
          </View>
     )
}

export default ConfirmScreen

const styles = StyleSheet.create({})
