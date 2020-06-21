import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
// import DepositOption from './pages/Deposit';
// import DepositConfirmation from './pages/Deposit/DepositConfirmation';
import TransactionValue from './pages/TransactionValue';
import TransactionConfirmation from './pages/TransactionConfirmation';
import TransactionSuccess from './components/TransactionSuccess';
import TransferFavorites from './pages/TransferFavorites';
import TransferDetails from './pages/TransferDetails';

const Stack = createStackNavigator();

const DepositStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="DepositValue" component={TransactionValue} />
    <Stack.Screen
      name="DepositConfirmation"
      component={TransactionConfirmation}
    />
    <Stack.Screen name="DepositSuccess" component={TransactionSuccess} />
  </Stack.Navigator>
);

const WithdrawStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="WithdrawValue" component={TransactionValue} />
    <Stack.Screen
      name="WithdrawConfirmation"
      component={TransactionConfirmation}
    />
    <Stack.Screen name="WithdrawSuccess" component={TransactionSuccess} />
  </Stack.Navigator>
);

const TransferStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="TransferFavorites" component={TransferFavorites} />
    <Stack.Screen name="TransferDetails" component={TransferDetails} />
    <Stack.Screen name="TransferValue" component={TransactionValue} />
    <Stack.Screen
      name="TransferConfirmation"
      component={TransactionConfirmation}
    />
    <Stack.Screen name="TransferSuccess" component={TransactionSuccess} />
  </Stack.Navigator>
);

export default function() {
  const isLogged = useSelector(state => state.userReducer.user.isLogged);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Deposit" component={DepositStack} />
            <Stack.Screen name="Withdraw" component={WithdrawStack} />
            <Stack.Screen name="Transfer" component={TransferStack} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
