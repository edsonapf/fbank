import React from 'react';
import {View} from 'react-native';
import AppContainer from '../AppContainer';
import TitleSection from '../TitleSection';
import styles from './styles';

export default function({title, finish, children}) {
  return (
    <AppContainer finish={finish}>
      <View style={styles.titleSection}>
        <TitleSection title={title} />
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </AppContainer>
  );
}
