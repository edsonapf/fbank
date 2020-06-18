import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransactionContainer from '../../components/TransactionContainer';
import styles from './styles';

export default function({route}) {
  const [value, setValue] = useState('0.0');
  const navigation = useNavigation();

  function onChangeText(text) {
    setValue(text);
  }

  function onPress() {
    navigation.navigate('DepositConfirmation', {
      transaction: route.params.transaction,
      transactionValue: value,
    });
  }

  return (
    <TransactionContainer title={route.params.transaction}>
      <View style={styles.main}>
        <Text style={styles.titleText}>
          Type the{' '}
          <Text style={{fontWeight: 'bold'}}>{route.params.transaction}</Text>{' '}
          value
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          keyboardType="decimal-pad"
        />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{color: '#FFF'}}>A</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
