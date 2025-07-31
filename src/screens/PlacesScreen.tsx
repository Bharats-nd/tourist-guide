import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { travelData } from '../data/travelData';

type RouteProps = RouteProp<RootStackParamList, 'Places'>;
type NavProps = NativeStackNavigationProp<RootStackParamList, 'Places'>;

interface Props {
  route: RouteProps;
}

const PlacesScreen: React.FC<Props> = ({ route }) => {
  const { city } = route.params;
  const places = travelData[city];
  const navigation = useNavigation<NavProps>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{city} Attractions 🗺️</Text>
      {places.map((place, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Details', {
              city,
              placeName: place.name,
              description: place.description,
            })
          }
        >
          <Text style={styles.placeName}>{place.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff3e0',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  placeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#bf360c',
  },
});

export default PlacesScreen;
