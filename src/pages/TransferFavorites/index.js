import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, List, Divider} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TransactionContainer from '../../components/TransactionContainer';
import styles from './styles';

const favorites = [
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
  {
    name: 'Teste Teste Teste',
    profile_photo:
      'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
  },
];

export default function({route}) {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  function renderIcon() {
    return <Icon name="search" size={20} color="#000000" />;
  }

  function onChangeText(text) {
    setName(text);
  }

  function onPress() {
    const {transaction} = route.params;
    navigation.navigate(`${transaction}Details`, {transaction});
  }

  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        key={index}
        style={styles.listItem}
        activeOpacity={0.5}
        onPress={onPress}>
        <View style={[styles.buttonIcon, {marginVertical: 4}]}>
          <Image
            source={{uri: item.profile_photo, height: 40, width: 40}}
            style={{borderRadius: 500}}
            resizeMode="contain"
          />
        </View>
        <Text style={{fontSize: 16}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TransactionContainer title={route.params.transaction}>
      <View style={styles.main}>
        <Input
          accessoryLeft={renderIcon}
          placeholder="Search by name"
          onChangeText={onChangeText}
          value={name}
          style={{borderRadius: 20}}
        />
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <View style={styles.buttonIcon}>
              <Icon name="plus" size={20} color="#000000" />
            </View>
            <Text style={{fontSize: 16}}>Type account data</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.contactTitleText}>Your contacts</Text>
        {favorites && (
          <List
            data={favorites}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
            style={{marginTop: 16}}
          />
        )}
      </View>
    </TransactionContainer>
  );
}
