import React, {useState} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Logo from '../../assets/img/Logo.png';
import Check from '../../assets/img/check.png';

export default function() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.main}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={Logo} />
        <Text style={styles.inputTitles}>CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setCpf(text)}
          value={cpf}
          keyboardType="number-pad"
        />
        <Text style={styles.inputTitles}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Image source={Check} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.footerText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.footerText}>About Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
