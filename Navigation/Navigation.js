import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Login from '../screens/AuthScreen/Login/Login.screen';
import Register from '../screens/AuthScreen/Register/Register.screen';
import Otp from '../screens/AuthScreen/Register/Otp.screen';
import ActivateAccount from '../screens/AuthScreen/Register/ActivateAccount';
import ConfirmScreen from '../screens/ConfirmScreen';
import SplashScreen from '../screens/Splash.screen';
import Icon from '../components/Icon';
import HomeScreen from '../screens/MainScreen/HomeScreen';
import AddPost from '../screens/MainScreen/AddPost';
import LikeScreen from '../screens/MainScreen/LikeScreen';
import ProfileScreen from '../screens/MainScreen/ProfileScreen';
import Header from '../components/Header';

const AuthenticationNavigator = createStackNavigator(
  {
    Login,
    Register,
    Otp,
    ActivateAccount,
    ConfirmScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const home = createStackNavigator(
  {
    home: HomeScreen,
  },
  {
    defaultNavigationOptions: ({ theme }) => {

      return {
        headerTitle: 'Instagram',
        headerStyle: {
          backgroundColor: theme === 'dark' ? 'black' : 'white',
        },
        headerRight: () => <Header theme={theme} />,
        headerTitleStyle: {
          justifyContent: 'center',
          fontFamily: 'Billabong',
          marginTop: 10,
          marginLeft: '10%',
          fontSize: 35,
        },
      };
    },
  }
);

const addPost = createStackNavigator({
  post: AddPost,
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: home,
    },
    AddPost: {
      screen: addPost

    },

    Like: LikeScreen,
    Profile: ProfileScreen,
  },
  {

    defaultNavigationOptions: ({ navigation, theme }) => ({
      animationEnabled: true,
      swipeEnabled: true,
      tabBarIcon: ({ focused }) => {
        console.log('theme', theme);
        console.log(navigation.theme);
        const { routeName } = navigation.state;

        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          IconComponent = focused ? Ionicons : MaterialCommunityIcons;
          iconName = focused ? 'md-home' : 'home-outline';
        } else if (routeName === 'AddPost') {
          IconComponent = AntDesign;
          iconName = 'plussquareo';
        } else if (routeName === 'Like') {
          IconComponent = focused ? Ionicons : MaterialCommunityIcons;
          iconName = focused ? 'md-heart' : 'heart-outline';
        } else if (routeName === 'Profile') {
          IconComponent = MaterialCommunityIcons;
          iconName = 'face-profile';
        }

        return (
          <Icon
            Component={IconComponent}
            name={iconName}
            size={iconName === 'plussquareo' ? 24 : 28}
          />
        );
      },

      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
      },
    }),
  }
);

// const AppNavigator = createStackNavigator({
//      Home: App
// })

const SplashNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Splash: SplashNavigator,
    Auth: AuthenticationNavigator,
    App,
  }),
  {
    initialRouteName: 'Splash',

  }
);
