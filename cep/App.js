import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({  
  title: {
    textAlign: 'center',
    fontSize: 36,  
    marginTop: 64,
    paddingBottom: 8,
    margin: 32,
  },
  bloco: {
    flexDirection: 'row',
    marginHorizontal: 32,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    padding: 4,
    marginRight: 16,
  },
  resultado: {
    margin: 32,
    padding: 2,
  },
  botao: {
    backgroundColor: 'green',
    margin: 2,
    padding: 1,
  }
})

export default function App() {
  const [cepInserido, setCepInserido] = useState('')
  const [endereco, setCep] = useState({})

  async function handleClick() {   
    const { data } = await axios.get
    (`https://viacep.com.br/ws/${cepInserido}/json/`)
    if 
      (data) setCep(data)
  }

  return (
    <View style={styles.input}>
      <Text style={styles.title}>CEP x Endereço</Text>
      <View style={styles.bloco}>
        <TextInput
          placeholder='Digite o CEP...'
          keyboardType="numeric"
          value={cepInserido}
          onChangeText={value => setCepInserido(value)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.botao}  onPress={handleClick}>
          <MaterialIcons name='check' size={30} color='white'  />
        </TouchableOpacity>
      </View>
      <View style={styles.resultado}>
        {endereco.cep && <Text><b>CEP:</b> {endereco.cep}</Text>}
        {endereco.logradouro && <Text><b>Logradouro:</b> {endereco.logradouro}</Text>}
        {endereco.bairro && <Text><b>Bairro:</b> {endereco.bairro}</Text>}
        {endereco.localidade && <Text><b>Cidade:</b> {endereco.localidade}</Text>}
        {endereco.uf && <Text><b>Estado:</b> {endereco.uf }</Text>}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

