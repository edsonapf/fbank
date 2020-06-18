import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../Header';
import styles from './styles';

export default function({menu, photo, finish, children}) {
  return (
    <View style={styles.main}>
      <Header menu={menu} photo={photo} finish={finish} />
      <ScrollView style={styles.scroll}>{children}</ScrollView>
    </View>
  );
}
