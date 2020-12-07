import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectColor } from '../redux-sagas/theme/theme.selector'
import MainContainer from '../screens/MainContainer'
const Icon = ({ Component, name, size, color }) => {
     return (
          <Component name={name} size={size} color={color} />

     )
}

const mapStateToProps = createStructuredSelector({
     color: selectColor
})

export default connect(mapStateToProps)(Icon)
