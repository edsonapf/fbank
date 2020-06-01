import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
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

  useEffect(() => {
    console.log(user);
  });

  return (
    <AppContainer>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardText}>Name: {user.name}</Text>
          <Text style={styles.cardText}>CPF: {user.cpf}</Text>
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
          <TouchableOpacity activeOpacity={0.9}>
            <FunctionCard transactionType="Deposit">
              <DepositIcon />
            </FunctionCard>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <FunctionCard transactionType="Withdraw">
              <WithdrawIcon />
            </FunctionCard>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <FunctionCard transactionType="Transfer">
              <TransferIcon />
            </FunctionCard>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
}
