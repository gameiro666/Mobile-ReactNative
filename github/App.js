import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 36,
    marginTop: 64,
    margin: 32,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 32,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    padding: 4,
    marginRight: 16,
  },
  resultado: {
    margin: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: 'green',
    margin: 2,
  } 
})

export default function App() {
  const [gitLogin, setGitLogin] = useState('')
  const [githubData, setGithubData] = useState({})

  async function handleClick() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${gitLogin}`
      )
      if (data) setGithubData(data)
    } catch (e) {
      console.log('Status', e)
      setGithubData(false)
    }
  }

  const logo =
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil dos Devs</Text>
      <Image 
          source={{ uri: githubData.avatar_url || logo }}
          style={{ width: 240, height: 240, borderRadius: 150, margin: 10}}
        />
      <View style={styles.row}>
        <TextInput
          placeholder='Digite o login git...'
          value={gitLogin}
          onChangeText={value => setGitLogin(value)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.botao} onPress={handleClick}>
          <MaterialIcons name='check' size={30} color='white' />
        </TouchableOpacity>
      </View>
      <View style={styles.resultado}>       
        {githubData ? (
          <View>
            {githubData.id && <Text><b>Id:</b> {githubData.id}</Text>}
            {githubData.name && <Text><b>Nome:</b> {githubData.name}</Text>}
            {githubData.public_repos && (
              <Text><b>Repositórios:</b> {githubData.public_repos}</Text>
            )}
            {githubData.created_at && (
              <Text><b>Criado em:</b> {githubData.created_at}</Text>
            )}
            {githubData.followers && (
              <Text><b>Seguidores:</b> {githubData.followers}</Text>
            )}
            {githubData.following && (
              <Text><b>Seguindo: </b> {githubData.following}</Text>
            )}
          </View>
        ) : (
          <Text>Usuário não encontrado.</Text>
        )}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

