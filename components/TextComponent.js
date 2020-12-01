import React from 'react'
import { Text } from 'react-native'
import PropTypes from "prop-types"

const TextComponent = (props) => {
     //console.log(props)
     const TextColor = 'black';
     return (

          <Text style={{ color: props.color ? props.color : TextColor, ...props.style }}>
               {props.children}

          </Text>

     )
}



export default TextComponent
