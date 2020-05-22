import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../Login';
import Main from '../Main';

export default function() {
  async function hasToken() {
    const token = await AsyncStorage.getItem('token');
    return token ? true : false;
  }

  return <>{hasToken() ? <Main /> : <Login />}</>;
}
