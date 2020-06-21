import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextMask} from 'react-native-masked-text';
import AppContainer from '../../components/AppContainer';
import TitleSection from '../../components/TitleSection';
import FunctionCard from '../../components/FunctionCard';
import Logo from '../../assets/img/logo_without_name.svg';
import DepositIcon from '../../assets/img/deposit_icon.svg';
import WithdrawIcon from '../../assets/img/withdraw_icon.svg';
import TransferIcon from '../../assets/img/transfer_icon.svg';
import styles from './styles';

export default function() {
  const user = useSelector(state => state.userReducer.user.data);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(user);
  });

  function changeScreen(mainScreen, screen) {
    navigation.navigate(mainScreen, {
      screen,
      params: {transaction: mainScreen},
    });
  }

  return (
    <AppContainer>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardText}>Name: {user.name}</Text>
          <Text style={styles.cardText}>
            CPF: <TextMask type={'cpf'} value={user.cpf} />
          </Text>
        </View>
        <View style={styles.accountInformationContainer}>
          <Text style={styles.cardText}>Account: {user.account}</Text>
          <Logo />
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TitleSection title="Functions" />
        </View>
        <View style={{alignItems: 'center', paddingBottom: 8}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => changeScreen('Deposit', 'DepositValue')}>
            <FunctionCard transactionType="Deposit">
              <DepositIcon stroke="#FFFFFF" strokeWidth="1" fill="#FFFFFF" />
            </FunctionCard>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => changeScreen('Withdraw', 'WithdrawValue')}>
            <FunctionCard transactionType="Withdraw">
              <WithdrawIcon stroke="#FFFFFF" strokeWidth="1" fill="#FFFFFF" />
            </FunctionCard>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => changeScreen('Transfer', 'TransferFavorites')}>
            <FunctionCard transactionType="Transfer">
              <TransferIcon stroke="#FFFFFF" />
            </FunctionCard>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
}
