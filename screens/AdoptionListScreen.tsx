import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const API_URL = 'https://your-api-url.com/api/v1/adoption-list';

type Props = NativeStackScreenProps<RootStackParamList, 'AdoptionList'>;

type Pet = {
  id: string;
  name: string;
  breed: string;
};

const AdoptionListScreen: React.FC<Props> = ({ navigation }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPets(data);
      } catch (err) {
        setError('Failed to fetch pets');
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Pets for Adoption</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Text style={styles.petName}>{item.name}</Text>
            <Text>{item.breed}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('PetDetail', item)} />
          </View>
        )}
      />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  petCard: { padding: 15, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  petName: { fontSize: 18, fontWeight: 'bold' },
});

export default AdoptionListScreen;