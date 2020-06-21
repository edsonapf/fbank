import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Modal, Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TransactionContainer from '../../components/TransactionContainer';
import styles from './styles';
import CheckIcon from '../../assets/img/check.png';

export default function({route}) {
  const [modal, setModal] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  function onPress() {
    setModal(true);
  }

  function onPressConfirm() {
    const {transaction} = route.params;
    setModal(false);
    navigation.navigate(`${transaction}Success`, {
      transaction: transaction,
    });
  }

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => {
    const name = secureTextEntry ? 'eye' : 'eye-slash';
    return (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon name={name} size={20} color="#000000" />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <TransactionContainer title={route.params.transaction}>
      <Modal
        visible={modal}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModal(false)}>
        <View style={styles.modal}>
          <Text style={{textAlign: 'center'}}>
            Type your password to confirm your transaction
          </Text>
          <Input
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcon}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onPressConfirm}
            activeOpacity={0.8}>
            <Image source={CheckIcon} />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.main}>
        <Text style={styles.titleText}>Confirm your transfer data</Text>
        <View style={{marginTop: 32}}>
          <Text style={styles.titleText}>
            Account: <Text style={{fontWeight: 'bold'}}>1</Text>
          </Text>
          <Text style={styles.titleText}>
            Name: <Text style={{fontWeight: 'bold'}}>Will Smith da Silva</Text>
          </Text>
        </View>
        <View style={{marginVertical: 64, alignItems: 'center'}}>
          <Text style={styles.valueText}>
            $ {route.params.transactionValue}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.changeValueButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Text style={styles.changeValueText}>Change value</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.8}>
            <Image source={CheckIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TransactionContainer>
  );
}
