import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ phone });
    navigation.navigate('Campaigns');
  };
  return (
    <View style={{ padding: 20 }}>
      <Text>Phone Number</Text>
      <TextInput value={phone} onChangeText={setPhone} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Send OTP" onPress={handleLogin} />
    </View>
  );
}
