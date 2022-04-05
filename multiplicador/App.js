import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';

export default function App() {
  const [primeiroNumero, setPrimeiroValor] = React.useState(null);
  const [segundoNumero, setSegundoValor] = React.useState(null);
  const [result, setResult] = React.useState('');
  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'antiquewhite',
    },
    text: {
      color: 'mintcream',
      fontSize: 22,
      fontWeight: 'bold',
    },
    resultado: {
      borderWidth: 1,
      borderColor: 'black',
      color: 'black',
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 5,
    },
    titulo:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 30,
      marginVertical: 5,
      textAlign: 'center',
      marginTop: 45,
    },
    subtitulo:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 15,
      textAlign: 'center',
    },
    button: {
      margin: 30,
      padding: 10,
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'indigo',
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      color: 'black',
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 5,
      fontSize: 25,
      textAlign: 'center'
    }
  }
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Multiplicador de Números</Text>
    <Text style={styles.subtitulo}>Insira dois números de sua escolha e veja o resultado da multiplicação.</Text>
    <TextInput style={styles.input} placeholderTextColor="#aaa"  placeholder='Digite o primeiro número' keyboardType='numeric' value={primeiroNumero} onChangeText={txt=>setPrimeiroValor(txt.replace(/[^0-9]/g, ''))}/>
    <TextInput style={styles.input} placeholderTextColor="#aaa" placeholder='Digite o segundo número' keyboardType='numeric' value={segundoNumero} onChangeText={txt=>setSegundoValor(txt.replace(/[^0-9]/g, ''))}/>
    <Pressable style={styles.button} onPress={()=>setResult(primeiroNumero*segundoNumero) }>
      <Text style={styles.text}>
        Multiplicar
      </Text>
    </Pressable>
    <View style={styles.result}>
      <Text style={styles.resultado}>
        {result!=null ? result : ''}
      </Text>
    </View>
    <StatusBar style="light" />
    </View>
  );
}