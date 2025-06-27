import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

const SERVICES = [
  { id: '1', title: 'Website Development', cost: 200 },
  { id: '2', title: 'ERP Add-on', cost: 150 },
];

export default function ServicesScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Services'>) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.cost} pts</Text>
            <Button title="Request" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}
