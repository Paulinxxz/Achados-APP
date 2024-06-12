import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimaisDesc({ animalFoto, animalNome }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: animalFoto }} style={styles.image} />
      </View>
      <Text style={styles.name}>{animalNome}</Text>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 6,
        width: 250,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  name: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18,
    color: 'blue',
  },
});

