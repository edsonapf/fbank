import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function({transactionType, children}) {
  return (
    <View style={styles.main}>
      <View style={styles.background} />
      <View style={styles.functionImageContainer}>{children}</View>
      <Text style={styles.text}>{transactionType}</Text>
    </View>
  );
}
