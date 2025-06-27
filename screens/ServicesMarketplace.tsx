import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

const services = [
  { id: '1', name: 'Website Build', price: 50 },
  { id: '2', name: 'Google Ads Credit', price: 20 },
];

export default function ServicesMarketplace({ navigation }: NativeStackScreenProps<RootStackParamList, 'Services'>) {
  const requestService = (id: string) => {
    // TODO: lock balance and request service
    alert('Service requested: ' + id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.price} pts</Text>
            <Button title="Request" onPress={() => requestService(item.id)} />
          </View>
        )}
      />
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  title: { fontWeight: 'bold' },
});
