import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function ProofOfDisplay({ navigation }: NativeStackScreenProps<RootStackParamList, 'Proof'>) {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission required');
      return;
    }
    const photo = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!photo.canceled) {
      const uri = photo.assets?.[0]?.uri;
      if (uri) {
        setImageUri(uri);
        // TODO: send to ONNX model for validation
        setResult('Product detected');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Capture Shelf" onPress={takePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {result !== '' && <Text>{result}</Text>}
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  image: { width: 200, height: 200, marginVertical: 10 },
});
