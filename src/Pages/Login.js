import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import CadastroUsuario from './CadastroUsuario'

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [fazercadastro, setFazerCadastro] = useState(false);

  const { Login, error } = useContext(AuthContext);

  function FazerLogin() {
    Login(email, senha);
  }

  if(fazercadastro) {
    return <CadastroUsuario  handle={setFazerCadastro}/>
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Images/logodozago.png')}
      />
      <TextInput
        style={styles.input}
        onChangeText={(digitado) => setEmail(digitado)}
        value={email}
        placeholder="Email do Usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={(digitado) => setSenha(digitado)}
        value={senha}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.bottomLinks} onPress={() => setFazerCadastro(true)}>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={FazerLogin}>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      {error &&
      <View style={styles.error}>
        <Text style={styles.errorText}>Email ou senha incorretos!</Text>
    </View>
}
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    color: 'white',
    fontWeight: 'bold',
    top: 7,
    fontSize: 18,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    top: 15,
  }
});
