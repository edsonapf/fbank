import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function() {
  const isLogged = useSelector(state => state.userReducer.user.isLogged);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
