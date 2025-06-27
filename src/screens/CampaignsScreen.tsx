import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

const CAMPAIGNS = [
  { id: '1', title: 'Local Beer Display', points: 50 },
  { id: '2', title: 'Artisan Chocolate', points: 40 },
];

export default function CampaignsScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Campaigns'>) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={CAMPAIGNS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.points} pts</Text>
            <Button title="Accept" onPress={() => navigation.navigate('Proof')} />
          </View>
        )}
      />
    </View>
  );
}
