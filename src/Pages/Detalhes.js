import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Detalhes({ handleVoltar, handleNovaObservacao, animal }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: animal.animalFoto }} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>Informações</Text>
        <Text style={styles.subtitulo}>{animal.animalNome}</Text>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{animal.animalNome}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Raça:</Text>
          <Text style={styles.value}>{animal.animalRaca}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.value}>{animal.animalTipo}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Cor:</Text>
          <Text style={styles.value}>{animal.animalCor}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Sexo:</Text>
          <Text style={styles.value}>{animal.animalSexo}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Observação:</Text>
          <Text style={styles.value}>{animal.animalObservacao}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Data Desaparecimento:</Text>
          <Text style={styles.value}>{animal.animalDtDesaparecimento}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Data Encontro:</Text>
          <Text style={styles.value}>{animal.animalDtEncontro}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{animal.animalStatus}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoItem}>
          <Text style={styles.label}>Usuario:</Text>
          <Text style={styles.value}>{animal.usuarioId}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNovaObservacao}>
          <Text style={styles.buttonText}>Nova Observação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: -10, 
    color: 'blue',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: -8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 9,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
