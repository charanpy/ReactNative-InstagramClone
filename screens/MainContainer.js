import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectAlertMessage } from '../redux-sagas/alert/alert.selector'

const MainContainer = (props) => {
     const AppTheme = props.alert.length > 0 ? 'rgba(0,0,0,0.5)' : "#fff";
     return (
          <SafeAreaView
               style={{ flex: 1, position: 'relative' }}
          >
               <View style={{ position: 'relative', backgroundColor: AppTheme, flex: 1, ...props.style }}>
                    {props.children}
               </View>
          </SafeAreaView>
     )
}

const mapStateToProps = createStructuredSelector({
     alert: selectAlertMessage
})

export default connect(mapStateToProps)(MainContainer)


