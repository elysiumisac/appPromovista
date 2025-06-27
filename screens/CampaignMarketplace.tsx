import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

const dummyCampaigns = [
  { id: '1', title: 'Energy Drink Launch', county: 'Bucharest' },
  { id: '2', title: 'Organic Snacks', county: 'Cluj' },
];

export default function CampaignMarketplace({ navigation }: NativeStackScreenProps<RootStackParamList, 'Campaigns'>) {
  const acceptCampaign = (id: string) => {
    // TODO: agent auto-assign logic
    navigation.navigate('Proof');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyCampaigns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.county}</Text>
            <Button title="Accept" onPress={() => acceptCampaign(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  title: { fontWeight: 'bold' },
});
