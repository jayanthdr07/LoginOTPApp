import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const forgotPassword = async () => {
    try {
      await api.post('/forgot-password', null, {
        params: { email },
      });
      alert('OTP sent');
      navigation.navigate('ResetPassword', { email });
    } catch (error) {
      alert('Error sending OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Send OTP" onPress={forgotPassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
  },
});
