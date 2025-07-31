import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { travelData } from '../data/travelData';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a City 🏙️</Text>
      {Object.keys(travelData).map((city) => (
        <TouchableOpacity
          key={city}
          style={styles.card}
          onPress={() => navigation.navigate('Places', { city })}
        >
          <Text style={styles.cityName}>{city}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  cityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a237e',
  },
});

export default HomeScreen;
