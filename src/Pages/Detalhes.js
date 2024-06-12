import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Detalhes({ handle, animal }) {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: animal.animalFoto }} style={styles.image} />
        </View>
        <Text style={styles.nometitle}>Nome:  {animal.animalNome}</Text>
        <Text style={styles.racatitle}>Raça:  {animal.animalRaca}</Text>
        <Text style={styles.tipotitle}>Tipo:  {animal.animalTipo}</Text>
        <Text style={styles.cortitle}>Cor:  {animal.animalCor}</Text>
        <Text style={styles.sexotitle}>Sexo:  {animal.animalSexo}</Text>
        <Text style={styles.observacaotitle}>Observação:  {animal.animalObservacao}</Text>
        <Text style={styles.dtdesaparecimentotitle}>Data Desaparecimento:  {animal.animalDtDesaparecimento}</Text>
        <Text style={styles.dtencontrotitle}>Data Encontro:  {animal.animalDtEncontro}</Text>
        <Text style={styles.statustitle}>Status:  {animal.animalStatus}</Text>
        <Text style={styles.usuariotitle}>Usuario:  {animal.usuarioId}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.container} onPress={() => handle(false)}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.novaobservacao}>Nova Observação</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
    width: 250,
    alignItems: 'center',
  },
  voltar: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  novaobservacao: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },

})