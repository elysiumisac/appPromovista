import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../supabaseClient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function LoginScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Login'>) {
  const [phone, setPhone] = useState('');
  const [token, setToken] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const sendOtp = async () => {
    await supabase.auth.signInWithOtp({ phone });
    setStep('otp');
  };

  const verifyOtp = async () => {
    await supabase.auth.verifyOtp({ phone, token, type: 'sms' });
    navigation.replace('Campaigns');
  };

  return (
    <View style={styles.container}>
      {step === 'phone' ? (
        <>
          <Text>Enter phone number</Text>
          <TextInput value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
          <Button title="Send OTP" onPress={sendOtp} />
        </>
      ) : (
        <>
          <Text>Enter OTP</Text>
          <TextInput value={token} onChangeText={setToken} style={styles.input} keyboardType="number-pad" />
          <Button title="Verify" onPress={verifyOtp} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 8,
    marginVertical: 8,
  },
});
