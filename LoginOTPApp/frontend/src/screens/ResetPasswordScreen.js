import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function ResetPasswordScreen({ route, navigation }) {
  const { email } = route.params;

  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const resetPassword = async () => {
    try {
      await api.post('/reset-password', null, {
        params: {
          email,
          otp,
          newPassword,
        },
      });
      alert('Password reset successful');
      navigation.navigate('Login');
    } catch (error) {
      alert('Invalid or expired OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <Text>OTP</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
      />

      <Text>New Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Button title="Reset Password" onPress={resetPassword} />
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
