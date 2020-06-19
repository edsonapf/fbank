import React, {useState, createRef} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';
import TransactionContainer from '../../components/TransactionContainer';
import CheckIcon from '../../assets/img/check.png';
import styles from './styles';

export default function({route}) {
  const [value, setValue] = useState('0.0');
  let cpfField = createRef();
  const navigation = useNavigation();

  function onChangeText(text) {
    console.warn(cpfField.getRawValue());
    setValue(text);
  }

  function onPress() {
    const {transaction} = route.params;
    navigation.navigate(`${transaction}Confirmation`, {
      transaction: route.params.transaction,
      transactionValue: cpfField.getRawValue(),
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
        <TextInputMask
          style={styles.input}
          type={'money'}
          options={{
            precision: 2,
            separator: '.',
            delimiter: ',',
            unit: '$',
          }}
          onChangeText={onChangeText}
          value={value}
          keyboardType="decimal-pad"
          ref={ref => (cpfField = ref)}
        />
        <View style={{alignItems: 'center', marginBottom: 4}}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={CheckIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
