import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function({title}) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
