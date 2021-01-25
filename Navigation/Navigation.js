import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import Login from '../screens/AuthScreen/Login/Login.screen';
import Register from '../screens/AuthScreen/Register/Register.screen';
import Otp from '../screens/AuthScreen/Register/Otp.screen';
import ActivateAccount from '../screens/AuthScreen/Register/ActivateAccount';
import ConfirmScreen from '../screens/ConfirmScreen';
import SplashScreen from '../screens/Splash.screen';
import Icon from '../components/shared/Icon/Icon';
import HomeContainer from '../screens/MainScreen/HomeScreen';
import AddPost from '../screens/MainScreen/Post/AddPost';
import LikeScreen from '../screens/MainScreen/LikeScreen';
import ProfileScreen from '../screens/MainScreen/ProfileScreen';
import Header from '../components/shared/Header/Header';
import ProfileHeader from '../components/Profile/ProfileHeader';
import EditProfile from '../screens/MainScreen/edit-profile/EditProfileContainer';
import EditField from '../screens/MainScreen/edit-profile/EditField';

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
    home: HomeContainer,
  },
  {
    defaultNavigationOptions: ({ theme, navigation }) => {
      return {
        headerTitle: 'Instagram',
        headerLeft: () => (
          <Header
            theme={theme}
            Component={MaterialIcons}
            name='add-box'
            left={15}
            onClick={() => navigation.navigate('AddPost')}
          />
        ),
        headerStyle: {
          backgroundColor: theme === 'dark' ? 'black' : 'white',
        },
        headerRight: () => (
          <Header
            theme={theme}
            Component={MaterialCommunityIcons}
            name='facebook-messenger'
            right={15}
            onClick={() => console.log('hi')}
          />
        ),
        headerTitleStyle: {
          justifyContent: 'center',
          fontFamily: 'Billabong',
          textAlign: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          flex: 1,
          fontSize: 36,
          marginTop: '5%'
        },
      };
    },
  }
);

const addPost = createStackNavigator(
  {
    post: AddPost,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      unmountOnBlur: true,
      tabBarVisible: false,
    },
  }
);

const profileScreen = createStackNavigator(
  {
    profile: ProfileScreen,
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        headerShown: false,
      }
    },
    EditField: {
      screen: EditField,
      navigationOptions: {
        headerShown: false,
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation: { state: { routeName } }, theme }) => {
      return {
        headerTitle: () => <ProfileHeader headerTitle={routeName} />,
        headerStyle: {
          height: 60,
          backgroundColor: theme === 'dark' ? 'black' : 'white'
        },

      };
    }
  }
);

profileScreen.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const App = createBottomTabNavigator(
  {
    Home: {
      screen: home,
    },
    AddPost: {
      screen: addPost,
    },

    Like: LikeScreen,
    Profile: {
      screen: profileScreen
    },
  },
  {
    defaultNavigationOptions: ({ navigation, theme }) => ({
      animationEnabled: true,
      swipeEnabled: true,
      unmountOnBlur: true,
      tabBarVisible: navigation.state.routeName !== 'AddPost',
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
          IconComponent = Ionicons;
          iconName = focused ? 'md-search' : 'ios-search';
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
        unmountOnBlur: true,
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
