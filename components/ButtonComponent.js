import React from 'react'
import { View, TouchableNativeFeedback, ActivityIndicator } from 'react-native'
import TextComponent from './TextComponent'
import { CommonStyles } from "../styles/Common.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectApiCallLoading } from "../redux-sagas/user/user.selector"
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
                         {props.loading ? (
                              <ActivityIndicator size="small" color="#fff" animating={true} />
                         ) : (

                                   <TextComponent color="white" style={CommonStyles.Button}>{props.title}</TextComponent>
                              )}
                    </View>
               </TouchableNativeFeedback>
          </View>

     )
}

const mapStateToProps = createStructuredSelector({
     loading: selectApiCallLoading
})

export default connect(mapStateToProps)(ButtonComponent)

