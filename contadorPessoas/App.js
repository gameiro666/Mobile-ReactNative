import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Pressable } from 'react-native';

export default function App() {
  const [counter, contaPessoa] = React.useState(0);
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'antiquewhite',
    },    
    text: {
      color: 'black',
      fontSize: 40,
    },
    titulo:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 55,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    counter: {
      fontSize: 40,
      color: 'black',
      margin: 50,
      padding: 20,
      textAlign: 'center'
    },
    botoes: {
      borderwidth: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    adicionar: {
      backgroundColor: 'chartreuse',
    },
    diminuir: {
      backgroundColor: 'red',
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>
      <Text style={styles.counter}>{counter} Pessoas</Text>
      <Pressable style={{...styles.botoes, ...styles.adicionar}} onPress={()=>contaPessoa(counter+1)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Pressable style={{...styles.botoes, ...styles.diminuir}} onPress={()=> counter!=0? contaPessoa(counter-1): ''}>
      <Text style={styles.text}>-</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}