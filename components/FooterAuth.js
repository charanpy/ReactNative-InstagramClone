import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FooterAuth = (props) => {
     return (
          <View style={styles.Footer}>
               {props.children}
          </View>
     )
}

export default FooterAuth

const styles = StyleSheet.create({
     Footer: {
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopColor: '#999',
          borderWidth: 0.7,
          borderBottomColor: 'white'
     }
})
