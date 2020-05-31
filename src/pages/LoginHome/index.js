import React from 'react';
import {useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import {login} from '../../store/actions/userAction';
import Login from '../Login';
import Home from '../Home';

export default function() {
  const tokens = useSelector(state => state.userReducer.tokens);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   hasToken();
  // }, [hasToken]);

  // const hasToken = useCallback(async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   if (token) {
  //     const refreshToken = await AsyncStorage.getItem('refresh_token');
  //     dispatch(login({token, refreshToken}));
  //   }
  //   return token !== null;
  // }, []);

  return <>{tokens.token ? <Home /> : <Login />}</>;
}
