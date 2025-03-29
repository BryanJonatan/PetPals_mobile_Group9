import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProps } from '../types/navigation';
import styles from './styles';

const SignupScreen: React.FC<NavigationProps<'Signup'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Signup" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignupScreen;
