import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AppContainer from '../../components/AppContainer';
import Person from '../../assets/img/person.jpg';
import styles from './styles';

export default function() {
  const user = useSelector(state => state.userReducer.user.data);

  return (
    <AppContainer photo>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.image} activeOpacity={0.5}>
          <Image source={Person} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </AppContainer>
  );
}
