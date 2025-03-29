import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const API_URL = 'https://your-api-url.com/api/v1/adoptions';

type Props = NativeStackScreenProps<RootStackParamList, 'PetDetail'>;

type PetDetail = {
  id: string;
  name: string;
  breed: string;
  age: number;
  description: string;
};

const PetDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;
  const [pet, setPet] = useState<PetDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setPet(data);
      } catch (err) {
        setError('Failed to fetch pet details');
      } finally {
        setLoading(false);
      }
    };
    fetchPetDetails();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;
  if (!pet) return <Text>No pet details found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pet.name}</Text>
      <Text style={styles.detailText}>Breed: {pet.breed}</Text>
      <Text style={styles.detailText}>Age: {pet.age} years</Text>
      <Text style={styles.detailText}>{pet.description}</Text>
      <Button title="Back to List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  detailText: { fontSize: 18, marginBottom: 10 },
});

export default PetDetailScreen;
