import 'react-native-gesture-handler';
import React from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Profile from './Profile';

const Stack = createStackNavigator();

const Navigation = () => {
  let auth = {
    authenticated: true,
    user: {
      email: "user@gmail.com",
      username: "John Doe"
    },
  }

  let ProfileScreenTitle = auth.authenticated ? auth.user.username : "Profile"

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome'}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ 
            title: ProfileScreenTitle
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;