import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function Wallet({ navigation }: NativeStackScreenProps<RootStackParamList, 'Wallet'>) {
  const [points, setPoints] = useState(0);

  const addPoints = () => setPoints(points + 10); // TODO: integrate Stripe
  const cashOut = () => alert('Cash-out requested'); // TODO: integrate payout

  return (
    <View style={styles.container}>
      <Text style={styles.points}>{points} pts</Text>
      <Button title="Buy Points" onPress={addPoints} />
      <Button title="Cash Out" onPress={cashOut} disabled={points < 100} />
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  points: { fontSize: 24, marginBottom: 10 },
});
