import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Button title="Campaigns" onPress={() => navigation.navigate('Campaigns')} />
      <Button title="Proof of Display" onPress={() => navigation.navigate('Proof')} />
      <Button title="Wallet" onPress={() => navigation.navigate('Wallet')} />
      <Button title="Services" onPress={() => navigation.navigate('Services')} />
      <Button title="Admin" onPress={() => navigation.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
});
