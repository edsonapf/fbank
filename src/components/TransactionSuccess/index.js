import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import TransactionContainer from '../TransactionContainer/index';
import SuccessAnimation from '../../assets/animations/succes_transaction.json';
import styles from './styles';

export default function({route}) {
  return (
    <TransactionContainer title={route.params.transaction} finish>
      <View style={styles.main}>
        <LottieView
          source={SuccessAnimation}
          autoPlay
          loop={false}
          style={{position: 'relative'}}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>
            <Text>Successful </Text>
            <Text style={{fontWeight: 'bold'}}>{route.params.transaction}</Text>
          </Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>
              Proof of {route.params.transaction}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
