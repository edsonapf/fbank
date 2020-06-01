import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, ScrollView, Text} from 'react-native';
import AppContainer from '../../components/AppContainer';
import Header from '../../components/Header';
import TitleSection from '../../components/TitleSection';
import FunctionCard from '../../components/FunctionCard';
import Logo from '../../assets/img/logo_without_name.svg';
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
          <FunctionCard transactionType="Deposit" />
          <FunctionCard transactionType="Withdraw" />
          <FunctionCard transactionType="Transfer" />
        </View>
      </View>
    </AppContainer>
  );
}
