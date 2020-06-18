import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import Logo from '../../assets/img/logo.svg';
import MenuIcon from '../../assets/img/menu_icon.svg';
import BackIcon from '../../assets/img/back_icon.svg';
import UserIcon from '../../assets/img/user_icon.svg';
import OptionIcon from '../../assets/img/options_button.svg';
import styles from './styles';

export default function({menu, photo, finish}) {
  const navigation = useNavigation();

  function onPressBack() {
    if (finish) {
      navigation.dispatch(StackActions.popToTop());
    }
    navigation.goBack();
  }

  return (
    <View style={styles.main}>
      {menu ? (
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <MenuIcon heigth={26} width={26} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressBack}>
          <BackIcon height={26} />
        </TouchableOpacity>
      )}
      <Logo />
      {photo ? (
        <TouchableOpacity>
          <OptionIcon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <UserIcon
            height={26}
            onPress={() => navigation.navigate('Profile')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
