import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

const PlaceDetailsScreen: React.FC<Props> = ({ route }) => {
  const { placeName, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{placeName}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f1f8e9',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e7d32',
  },
  description: {
    fontSize: 18,
    color: '#424242',
  },
});

export default PlaceDetailsScreen;
