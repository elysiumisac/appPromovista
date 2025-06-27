import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function Admin({ navigation }: NativeStackScreenProps<RootStackParamList, 'Admin'>) {
  return (
    <View style={styles.container}>
      <Text>Admin Dashboard (TODO)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
