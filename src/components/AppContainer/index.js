import React from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Header from '../Header';
import styles from './styles';

export default function({menu, photo, finish, children}) {
  return (
    <KeyboardAvoidingView style={styles.main}>
      <Header menu={menu} photo={photo} finish={finish} />
      <ScrollView style={styles.scroll}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
}
