import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import TitleSection from '../../components/TitleSection';
import FunctionCard from '../../components/FunctionCard';
import Logo from '../../assets/img/logo_without_name.svg';

export default function() {
  const user = useSelector(state => state.userReducer.user.data);

  useEffect(() => {
    console.log(user);
  });

  return (
    <View style={styles.main}>
      <Header />
      <ScrollView style={styles.scroll}>
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
          <TitleSection style={{marginBottom: 16}} title="Functions" />
          <View style={{alignItems: 'center'}}>
            <FunctionCard style={{marginBottom: 8}} transactionType="Deposit" />
            <FunctionCard
              style={{marginBottom: 8}}
              transactionType="Withdraw"
            />
            <FunctionCard
              style={{marginBottom: 8}}
              transactionType="Transfer"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
