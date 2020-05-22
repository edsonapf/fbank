import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Logo from '../../assets/img/logo.svg';
import MenuIcon from '../../assets/img/menu_icon.svg';
import BackIcon from '../../assets/img/back_icon.svg';
import UserIcon from '../../assets/img/user_icon.svg';
import OptionIcon from '../../assets/img/options_button.svg';
import styles from './styles';

export default function({menu, photo}) {
  return (
    <View style={styles.main}>
      {menu ? (
        <TouchableOpacity>
          <MenuIcon heigth={26} width={26} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
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
          <UserIcon height={26} />
        </TouchableOpacity>
      )}
    </View>
  );
}
