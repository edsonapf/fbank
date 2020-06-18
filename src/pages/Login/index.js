import React, {useState} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import FbankApi from '../../services';
import {login as loginAction} from '../../store/actions/userAction';
import styles from './styles';
import Logo from '../../assets/img/logo.svg';
import Check from '../../assets/img/check.png';

export default function() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  async function login() {
    try {
      const {token, refreshToken} = await FbankApi.login(cpf, password);
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('refresh_token', refreshToken);
      dispatch(loginAction({token, refreshToken}));
    } catch (err) {
      const error = JSON.parse(err.message);
      console.warn(error);
    }
  }

  async function test() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIxMjM0NTY3ODkxNCIsImlkIjoxLCJqdGkiOiJsSmtTdkhCMGsyIiwiaWF0IjoxNTg5ODk0MzQyLCJleHAiOjE1ODk5ODA3NDJ9.aXlH4cLkp9lBx8Q06U_E_6uchYWJmbDMJzuvxHpY95s';
    const refreshToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIxMjM0NTY3ODkxNCIsImlkIjoxLCJqdGkiOiI1V0dmNVBKSkNoIiwiaWF0IjoxNTg5ODk0MzQyfQ.c_wFcIFiTudc3pXEmd57AzAeSkZ7IgBF04NbE6NDcFQ';
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refresh_token', refreshToken);
  }

  async function show() {
    const token = await AsyncStorage.getItem('token');
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    console.warn(`token: ${token}`);
    console.warn(`refresh_token: ${refresh_token}`);
  }

  return (
    <KeyboardAvoidingView style={styles.main}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Logo height={250} width={250} />
        <View style={{width: '100%'}}>
          <Text style={styles.inputTitles}>CPF</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setCpf(text)}
            value={cpf}
            keyboardType="number-pad"
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.inputTitles}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={login}>
          <Image source={Check} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={test}>
          <Text style={styles.footerText}>Forget password?</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={show}>
          <Text style={styles.footerText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.footerText}>About Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
