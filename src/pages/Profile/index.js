import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AppContainer from '../../components/AppContainer';
import TitleSection from '../../components/TitleSection';
import QRCode from '../../assets/img/qr_code.png';
import styles from './styles';

export default function() {
  const user = useSelector(state => state.userReducer.user.data);

  return (
    <AppContainer photo>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.image} activeOpacity={0.8}>
          <Image source={{uri: user.profile_photo}} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TitleSection title="Account QR Code" />
      </View>
      <View style={styles.accountInformationContainer}>
        <Image source={QRCode} style={{height: 150, width: 150}} />
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#000000'}]}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Edit User Informations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#F45353'}]}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </AppContainer>
  );
}
