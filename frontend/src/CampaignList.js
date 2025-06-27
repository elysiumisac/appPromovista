import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    supabase.from('campaigns').select('*').then(({ data }) => setCampaigns(data || []));
  }, []);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={{ marginBottom: 10 }}>{item.name}</Text>}
      />
    </View>
  );
}
