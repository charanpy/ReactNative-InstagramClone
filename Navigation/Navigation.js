//import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../screens/AuthScreen/Login/Login.screen";
import Register from "../screens/AuthScreen/Register/Register.screen"
import Otp from "../screens/AuthScreen/Register/Otp.screen"
import AccountActivate from "../screens/AuthScreen/Register/AccountActivate"

const AuthenticationNavigator = createStackNavigator({
     Login: Login,
     Register: Register,
     Otp: Otp,
     ActivateAccount: AccountActivate
}, {
     defaultNavigationOptions: {
          headerShown: false
     }
})


export default createAppContainer(AuthenticationNavigator);
