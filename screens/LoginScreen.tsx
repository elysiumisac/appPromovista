import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function LoginScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Login'>) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'phone' | 'code'>('phone');

  const requestCode = () => {
    // TODO: integrate with Supabase OTP
    setStep('code');
  };

  const verifyCode = () => {
    // TODO: verify OTP with Supabase
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      {step === 'phone' ? (
        <>
          <Text style={styles.title}>Enter Phone Number</Text>
          <TextInput value={phone} onChangeText={setPhone} placeholder="07xxxxxxxx" style={styles.input} />
          <Button title="Send Code" onPress={requestCode} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Enter Verification Code</Text>
          <TextInput value={code} onChangeText={setCode} placeholder="123456" style={styles.input} />
          <Button title="Verify" onPress={verifyCode} />
        </>
      )
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: '100%' },
});
