import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
//import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { selectColor } from '../redux-sagas/theme/theme.selector'
import { createStructuredSelector } from 'reselect'
const TextComponent = (props) => {
     const [textColor, setTextColor] = useState("black")
     useEffect(() => {
          if (textColor === props.colorText) return;
          setTextColor(props.colorText)
     }, [props.colorText])

     return (

          <Text style={{ color: props.color ? props.color : textColor, ...props.style }}>
               {props.children}

          </Text>

     )
}

const mapStateToProps = createStructuredSelector({
     colorText: selectColor
})


export default connect(mapStateToProps)(TextComponent)
