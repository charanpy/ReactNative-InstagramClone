import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons"
//import TextComponent from './TextComponent'
import MainContainer from '../screens/MainContainer'

const Header = ({ theme: themeIcon }) => {
     let theme = themeIcon === 'dark' ? 'white' : 'black'
     return (
          <MainContainer style={styles.screen}>
               <TouchableNativeFeedback><View style={{ marginRight: 24 }}>
                    <Octicons name={"search"} size={24} color={theme} />
               </View></TouchableNativeFeedback>

               <TouchableNativeFeedback><View style={{ marginRight: 16 }}>
                    <MaterialCommunityIcons name={"facebook-messenger"} size={24} color={theme} />
               </View></TouchableNativeFeedback>

          </MainContainer>
     )
}

const styles = StyleSheet.create({
     screen: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'

     },
     left: {
          flexDirection: 'row',

     },
     text: {
          fontFamily: 'Billabong',
          fontSize: 30,
          marginHorizontal: 15
     }
})

export default Header
