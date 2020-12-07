import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import Navigation from './Navigation'
import MainContainer from '../screens/MainContainer'
import { createStructuredSelector } from 'reselect';
import { selectBackground } from '../redux-sagas/theme/theme.selector'
import { connect } from 'react-redux';

const TabNavigation = ({ background }) => {
     const theme = background === 'black' ? 'dark' : 'light'

     return (
          <MainContainer>
               <Navigation theme={theme} />
          </MainContainer>
     )
}
const mapStateToProps = createStructuredSelector({
     background: selectBackground
})


export default connect(mapStateToProps)(TabNavigation)

