import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Insert() {
  const [usuarioNome, setUsuarioNome] = useState();
  const [usuarioTelefone, setUsuarioTelefone] = useState();
  const [usuarioEmail, setUsuarioEmail] = useState();
  const [usuarioSenha, setUsuarioSenha] = useState();

  async function InsertUsuario() {
    await fetch('http://10.139.75.44/api/Usuario/InsertUsuario', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify({
        usuarioTelefone: usuarioTelefone,
        usuarioEmail: usuarioEmail,
        usuarioNome: usuarioNome,
        usuarioSenha: usuarioSenha
      })
    })
      .then((response) => response.json() )
      .then( json => { setUsuarioTelefone(''), setUsuarioEmail(''), setUsuarioNome(''),  setUsuarioSenha('') })
      .catch(err => console.log(err));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.cadastrarusuario}>Cadastrar Usuario</Text>
      <TextInput
        inputMode="text"
        placeholder='Nome'
        style={styles.input}
        value={usuarioNome}
        onChangeText={(digitado) => setUsuarioNome(digitado)}
        placeholderTextColor='white'
      />
      <TextInput
        inputMode="text"
        placeholder='Telefone'
        style={styles.input}
        value={usuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
        placeholderTextColor='white'
      />
      <TextInput
        inputMode="text"
        placeholder='E-mail'
        style={styles.input}
        value={usuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail(digitado)}
        placeholderTextColor='white'
      />
      <TextInput
        inputMode="text"
        placeholder='Senha'
        style={styles.input}
        value={usuarioSenha}
        secureTextEntry={true}
        onChangeText={(digitado) => setUsuarioSenha(digitado)}
        placeholderTextColor='white'
      />
      <TouchableOpacity style={styles.btn} onPress={() => InsertUsuario()}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#50524F',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: "90%",
    height: 55,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    color: "white",
    marginTop:10,
    backgroundColor: '#323232'
},
btn: {
  width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 0,
    backgroundColor: "white",
},
btnText: {
  color: "blue",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
},
cadastrarusuario: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white'
}
})