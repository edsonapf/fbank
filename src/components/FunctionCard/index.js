import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function({transactionType}) {
  return (
    <View style={styles.main}>
      <Text>IMAGE HERE</Text>
      <Text style={styles.text}>{transactionType}</Text>
    </View>
  );
}
