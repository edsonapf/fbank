import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TransactionContainer from '../../components/TransactionContainer';
import styles from './styles';

export default function({route}) {
  return (
    <TransactionContainer title={route.params.transaction}>
      <Text>A</Text>
    </TransactionContainer>
  );
}
