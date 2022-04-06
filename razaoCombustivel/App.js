import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';

export default function App() {
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'silver',
    },
    titulo:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 30,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    imagem: {
      width: 200,
      height: 200,
      borderRadius: 250,
      borderColor: 'yellow',
      borderWidth: 5,
      marginVertical: 10
    },
    texto: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },    
    input: {
      borderWidth: 1,
      textAlign: 'center',
      borderColor: 'black',  
      color: 'black',
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 5,
      fontSize: 25
    },
    button: {
      width: 130,
      margin: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      backgroundColor: 'yellow',
    },
    result: {
      fontSize: 40,
      textAlign: 'center'
    }    
    
  }
  const [gasolina, precoGasolina] = React.useState(null)
  const [alcool, precoAlcool] = React.useState(null)
  const [result, resultado] = React.useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qual combustível compensa mais?</Text>
      <View style={{alignItems: 'center'}}>
        <Image 
          source={{uri: 'https://media.istockphoto.com/photos/fuel-gauge-with-a-red-needle-indicating-empty-3d-render-picture-id1247815239?k=20&m=1247815239&s=612x612&w=0&h=7r-4_LjOfKIjVaNFxdh8WzQ-85aUxhsQH91F76qEnKs='}} 
          style={styles.imagem}/>
      </View>
      <TextInput 
        style={styles.input} 
        placeholderTextColor="seashell" 
        placeholder="Digite o preço do álcool" 
        value={alcool} 
        onChangeText={txt=>precoAlcool(txt.replace(/[^0-9]/g, ''))}/>
      <TextInput 
        style={styles.input} 
        placeholderTextColor="seashell" 
        placeholder="Digite o preço da gasolina"value={gasolina} 
        onChangeText={txt=>precoGasolina(txt.replace(/[^0-9]/g, ''))}/>
      <View style={{alignItems: 'center'}}>
        <Pressable 
          style={styles.button} 
          onPress={()=>{
          if(gasolina&&alcool){
            if(alcool/gasolina>0.7) resultado("Melhor abastecer com gasolina!")
            else resultado("Melhor abastecer com álcool!")
          }
        }}>
          <Text style={styles.texto}>
            Verificar
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{...styles.result, ...styles.texto}}>{result}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}