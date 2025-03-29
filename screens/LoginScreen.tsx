import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProps } from '../types/navigation';
import styles from './styles';

const LoginScreen: React.FC<NavigationProps<'Login'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default LoginScreen;
