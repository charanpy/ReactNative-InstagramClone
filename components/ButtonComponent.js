import React from 'react'
import { View, TouchableNativeFeedback } from 'react-native'
import TextComponent from './TextComponent'
import { CommonStyles } from "../styles/Common.styles";

const ButtonComponent = (props) => {
     return (
          <View style={{ alignItems: 'center', borderRadius: 5, width: '100%' }}>
               <TouchableNativeFeedback foreground
                    disabled={props.disableButton}
                    onPress={props.onPressButton}>
                    <View style={
                         props.disableButton ?
                              CommonStyles.Login_Button : CommonStyles.Login_Button_Disable
                    }>
                         <TextComponent color="white" style={CommonStyles.Button}>{props.title}</TextComponent>
                    </View>
               </TouchableNativeFeedback>
          </View>

     )
}

export default ButtonComponent

