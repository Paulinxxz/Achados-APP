import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Animated, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AnimaisDesc from './AnimaisDesc';
import Detalhes from './Detalhes';
import NovaObservacao from './NovaObservacao';

export default function Home() {
  const [animaisDesc, setAnimaisDesc] = useState([]);
  const [error, setError] = useState(false);
  const [detalhes, setDetalhes] = useState(false);
  const [adicionarObservacao, setAdicionarObservacao] = useState(false);
  const [animal, setAnimal] = useState(null);
  const [selectedTab, setSelectedTab] = useState('desaparecidos');

  const animaisfiltrados = animaisDesc.filter(animal => 
    selectedTab === 'desaparecidos' ? animal.animalStatus === 1 : animal.animalStatus !== 1
  );

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

  function irParaNovaObservacao() {
    setAdicionarObservacao(true);
  }

  function voltarParaDetalhes() {
    setAdicionarObservacao(false);
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fade, flex: 1 }}>
        {adicionarObservacao ? (
          <NovaObservacao handleVoltar={voltarParaDetalhes} animal={animal} />
        ) : detalhes ? (
          <Detalhes handleVoltar={fecharDetalhes} handleNovaObservacao={irParaNovaObservacao} animal={animal} />
        ) : (
          <View style={styles.content}>
            <View style={styles.tabContainer}>
              <TouchableOpacity 
                style={[styles.tabButton, selectedTab === 'desaparecidos' && styles.tabButtonSelected]} 
                onPress={() => setSelectedTab('desaparecidos')}
              >
                <Text style={styles.tabButtonText}>Desaparecidos</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tabButton, selectedTab === 'encontrados' && styles.tabButtonSelected]} 
                onPress={() => setSelectedTab('encontrados')}
              >
                <Text style={styles.tabButtonText}>Encontrados</Text>
              </TouchableOpacity>
            </View>
            {animaisDesc.length > 0 ? (
              <FlatList
                style={styles.flat}
                data={animaisfiltrados}
                renderItem={({ item }) =>
                  <View style={[
                    styles.itemContainer, 
                    selectedTab === 'encontrados' && styles.closedItemContainer
                  ]}>
                    <AnimaisDesc 
                      animalFoto={item.animalFoto} 
                      animalNome={item.animalNome} 
                      style={selectedTab === 'encontrados' ? styles.closedAnimalDesc : null}
                    />
                    {selectedTab === 'encontrados' && (
                      <Text style={styles.closedText}>X</Text>
                    )}
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.button} onPress={() => exibirdetalhes(item)}>
                        <Text style={styles.buttonText}>Detalhes</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                }
                keyExtractor={(item) => item.animalId.toString()}
              />
            ) : (
              <ActivityIndicator size="large" color="#00ff00" />
            )}
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C84FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 4,
    top: 5,
  },
  tabButtonSelected: {
    backgroundColor: '#0056b3',
  },
  tabButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flat: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    backgroundColor: '#282828',
    borderRadius: 10,
    marginVertical: 15,
    padding: 25,
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  closedItemContainer: {
    backgroundColor: '#282828',
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
  closedText: {
    position: 'absolute',
    right: 10,
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
