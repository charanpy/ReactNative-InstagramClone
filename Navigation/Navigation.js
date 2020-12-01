//import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../screens/AuthScreen/Login/Login.screen";
import Register from "../screens/AuthScreen/Register/Register.screen"


const AuthenticationNavigator = createStackNavigator({
            Login: Login,
            Register: Register
}, {
            defaultNavigationOptions: {
                        headerShown: false
            }
})


export default createAppContainer(AuthenticationNavigator);
