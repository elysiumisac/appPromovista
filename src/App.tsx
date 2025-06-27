import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CampaignsScreen from './screens/CampaignsScreen';
import ProofOfDisplayScreen from './screens/ProofOfDisplayScreen';
import WalletScreen from './screens/WalletScreen';
import ServicesScreen from './screens/ServicesScreen';
import AdminScreen from './screens/AdminScreen';

export type RootStackParamList = {
  Login: undefined;
  Campaigns: undefined;
  Proof: undefined;
  Wallet: undefined;
  Services: undefined;
  Admin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Campaigns" component={CampaignsScreen} />
        <Stack.Screen name="Proof" component={ProofOfDisplayScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
