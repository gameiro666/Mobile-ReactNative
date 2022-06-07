import React, { useEffect, useState } from 'react'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Switch, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'black',
    margin: 16,
    marginTop: 64,
    paddingBottom: 8,
  },
})

export default function App() {
  const [diaOn, setdiaOn] = useState(true)
  const [pequenoOn, setpequenoOn] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const diaOnFromStorage = await AsyncStorage.getItem('diaOn')
      setdiaOn(JSON.parse(diaOnFromStorage))

    const pequenoOnFromStorage = await AsyncStorage.getItem('pequenoOn')
      setpequenoOn(JSON.parse(pequenoOnFromStorage))
  }

  async function ativarDia() {
    setdiaOn(!diaOn)
    await AsyncStorage.setItem('diaOn', diaOn.toString())
  }

  async function ativarPequeno() {
    setpequenoOn(!pequenoOn)
    await AsyncStorage.setItem('pequenoOn', pequenoOn.toString())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>
      <StatusBar style='auto' />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Dia</Text>
          <Switch value={diaOn} onChange={ativarDia} />
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}
        >
          <Text>Pequeno</Text>
          <Switch value={pequenoOn} onChange={ativarPequeno} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: diaOn ? 'white' : 'black',
          borderColor: diaOn ? 'black' : 'red',
          flex: 1,
          borderWidth: 5,
          margin: 16
        }}
      >
        <Text
          style={{
            color: diaOn ? 'black' : 'white',
            fontSize: pequenoOn ? 18 : 36
          }}
        >
          "A vingança nunca é plena, mata a alma e envenena"
          (Seu Madruga)
        </Text>
      </View>
    </View>
  )
}