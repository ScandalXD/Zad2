import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../style/styles';

export default function LoginScreen({ setIsLoggedIn, setUserEmail, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Wprowadź email i hasło');
      return;
    }

    try {
      const data = await AsyncStorage.getItem(`user:${email}`);
      if (!data) {
        Alert.alert('Nie znaleziono użytkownika');
        return;
      }

      const parsed = JSON.parse(data);
      if (parsed.password !== password) {
        Alert.alert('Niepoprawne hasło');
        return;
      }
      setUserEmail(email);
      setIsLoggedIn(true);
    } catch (e) {
      Alert.alert('Błąd logowania');
      console.error(e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.authFlex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Logowanie</Text>
          <TextInput
            placeholder="Email"
            style={styles.authInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Hasło"
            secureTextEntry
            style={styles.authInput}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Zaloguj się" onPress={handleLogin} />
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.authLink}
          >
            Nie masz konta? Zarejestruj się
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
