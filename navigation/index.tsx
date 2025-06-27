import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CampaignMarketplace from '../screens/CampaignMarketplace';
import ProofOfDisplay from '../screens/ProofOfDisplay';
import Wallet from '../screens/Wallet';
import ServicesMarketplace from '../screens/ServicesMarketplace';
import Admin from '../screens/Admin';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Campaigns: undefined;
  Proof: undefined;
  Wallet: undefined;
  Services: undefined;
  Admin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Campaigns" component={CampaignMarketplace} />
        <Stack.Screen name="Proof" component={ProofOfDisplay} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Services" component={ServicesMarketplace} />
        <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
