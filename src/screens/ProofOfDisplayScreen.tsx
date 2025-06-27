import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function ProofOfDisplayScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Proof'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Camera overlay would be here</Text>
      <Text>ONNX validation stub</Text>
      <Button title="Submit" onPress={() => navigation.navigate('Wallet')} />
    </View>
  );
}
