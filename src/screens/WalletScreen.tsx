import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function WalletScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Wallet'>) {
  const [points, setPoints] = useState(100);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Points Balance: {points}</Text>
      <Button title="Buy Points" onPress={() => {}} />
      <Button title="Services" onPress={() => navigation.navigate('Services')} />
    </View>
  );
}
