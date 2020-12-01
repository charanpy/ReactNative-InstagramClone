import React from 'react'
import { SafeAreaView, View } from 'react-native'

const MainContainer = (props) => {
     const AppTheme = "#fff";
     return (
          <SafeAreaView
               style={{ flex: 1 }}
          >
               <View style={{ backgroundColor: AppTheme, flex: 1, ...props.style }}>
                    {props.children}
               </View>
          </SafeAreaView>
     )
}

export default MainContainer


