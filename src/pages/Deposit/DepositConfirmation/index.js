import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransactionContainer from '../../../components/TransactionContainer';
import styles from './styles';

export default function({route}) {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  function onChangeText(text) {
    setValue(text);
  }

  function onPress() {
    navigation.navigate('SuccessDeposit', {
      transaction: route.params.transaction,
    });
  }

  return (
    <TransactionContainer title={route.params.transaction}>
      <View style={styles.main}>
        <Text style={styles.titleText}>Confirm your data</Text>
        <View style={{marginTop: 32}}>
          <Text style={styles.titleText}>Account: 1</Text>
          <Text style={styles.titleText}>Name: Will Smith da Silva</Text>
        </View>
        <View style={{marginVertical: 64, alignItems: 'center'}}>
          <Text style={styles.valueText}>
            $ {route.params.transactionValue}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{color: '#FFF'}}>Change value</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{color: '#FFF'}}>A</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
