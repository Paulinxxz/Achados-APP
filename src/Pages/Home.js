import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Animated, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AnimaisDesc from './AnimaisDesc';
import Detalhes from './Detalhes';

export default function Home() {
  const [animaisDesc, setAnimaisDesc] = useState([]);
  const [error, setError] = useState(false);
  const [detalhes, setDetalhes] = useState(false);
  const [animal, setAnimal] = useState(null);

  const animaisfiltrados = animaisDesc.filter(animal => animal.animalStatus === 1);

  const fade = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      fade.setValue(0);
      Animated.timing(fade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fade])
  );

  async function getAnimaisDesc() {
    await fetch('http://10.139.75.44/api/Animais/GetAllAnimaiss', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimaisDesc(json))
      .catch(err => setError(true));
  }

  useEffect(() => {
    getAnimaisDesc();
  }, []);

  function exibirdetalhes(item) {
    setDetalhes(true);
    setAnimal(item);
  }

  function fecharDetalhes() {
    setDetalhes(false);
    setAnimal(null);
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fade }}>
        {animaisDesc.length > 0 ? (
          <FlatList
            data={animaisfiltrados}
            renderItem={({ item }) =>
              <View style={styles.itemContainer}>
                {detalhes && animal && animal.animalId === item.animalId ? (
                  <Detalhes handle={fecharDetalhes} animal={animal} />
                ) : (
                  <View>
                    <AnimaisDesc animalFoto={item.animalFoto} animalNome={item.animalNome} />
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.button} onPress={() => exibirdetalhes(item)}>
                        <Text style={styles.buttonText}>Detalhes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            }
            keyExtractor={(item) => item.animalId.toString()}
          />
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50524F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  itemContainer: {
    backgroundColor: '#282828',
    borderRadius: 10,
    marginVertical: 15,
    padding: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    height: 40,
    alignItems: 'center',
    width: 250,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    top: 7,
  },
});
