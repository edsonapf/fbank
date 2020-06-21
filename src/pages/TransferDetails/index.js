import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInputMask} from 'react-native-masked-text';
import TransactionContainer from '../../components/TransactionContainer';
import CheckIcon from '../../assets/img/check.png';
import styles from './styles';

export default function({route}) {
  const navigation = useNavigation();
  let cpfField = useRef();
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  function onPress() {
    const {transaction} = route.params;
    navigation.navigate(`${transaction}Value`, {
      transaction,
      // transactionValue: cpfField.getRawValue(),
    });
  }

  return (
    <TransactionContainer title={route.params.transaction}>
      <View style={styles.main}>
        <Text style={styles.titleText}>Complete the data to continue</Text>
        <View style={{paddingVertical: 32}}>
          <TextInput
            value={account}
            placeholder="Account"
            onChangeText={text => setAccount(text)}
            keyboardType="number-pad"
            style={styles.input}
          />
          <TextInput
            value={name}
            placeholder="Name"
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInputMask
            value={cpf}
            type="cpf"
            placeholder="CPF"
            onChangeText={text => setCpf(text)}
            keyboardType="number-pad"
            ref={ref => (cpfField = ref)}
            style={styles.input}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 4}}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={CheckIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
