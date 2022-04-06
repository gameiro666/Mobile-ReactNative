import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';

export default function App() {
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'aliceblue',
    },
    titulo:{
      fontWeight: 'bold',
      color: 'darkblue',
      fontSize: 30,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    imagem: {
      width: 200,
      height: 200,
      borderRadius: 250,
      borderColor: 'darkblue',
      borderWidth: 5,
      marginVertical: 10
    },
    texto: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },    
    input: {
      borderWidth: 3,
      textAlign: 'center',
      borderColor: 'darkblue',  
      color: 'black',
      backgroundColor: 'white',
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 5,
      fontSize: 25
    },
    button: {
      width: 130,
      margin: 30,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      backgroundColor: 'powderblue',
      borderWidth: 3,      
      borderColor: 'darkblue',
    },
    result: {
      fontSize: 40,
      textAlign: 'center'
    }    
    
  }
  const [altura, setAltura] = React.useState(null)
  const [peso, setPeso] = React.useState(null)
  const [result, resultado] = React.useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de IMC</Text>
      <View style={{alignItems: 'center'}}>
        <Image 
          source={{uri: 'https://static.tuasaude.com/media/article/ac/dd/gordura-corporal-ideal_19609_l.jpg'}} 
          style={styles.imagem}/>
      </View>
      <TextInput 
        style={styles.input} 
        placeholderTextColor="silver" 
        placeholder="Digite seu peso em kgs" 
        value={peso} 
        onChangeText={txt=>setPeso(txt.replace(/[^0-9]/g, ''))}/>
      <TextInput 
        style={styles.input} 
        placeholderTextColor="silver" 
        placeholder="Digite sua altura em cm"value={altura} 
        onChangeText={txt=>setAltura(txt.replace(/[^0-9]/g, ''))}/>
      <View style={{alignItems: 'center'}}>
        <Pressable 
          style={styles.button} 
          onPress={()=>{
            if(altura&&peso){
              const imc = peso/(altura/100)**2
              switch(true){
                case (imc<18.5):
                  resultado([imc.toFixed(2), " | ",
                    "Abaixo do peso ideal"]
                  )
                break
                case (imc<24.9):
                  resultado([imc.toFixed(2), " | ", 
                    " - Peso ideal"]
                  )
                break
                case(imc<29.9):
                  resultado([imc.toFixed(2), " | ",
                  "Sobrepeso"]
                  )
                break
                case(imc<34.9):
                  resultado([imc.toFixed(2), " | ",
                  "Obesidade Grau I"]
                  )
                break
                case(imc<39.9):
                  resultado([imc.toFixed(2), " | ",
                  "Obesidade Grau II"]
                  )
                break
                case(imc>=40):
                  resultado([imc.toFixed(2), " | ",
                  "Obesidade mórbida"]
                  )
                break
              }
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