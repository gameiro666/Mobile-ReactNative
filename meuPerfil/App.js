import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, scroll } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Image 
        source={{
          uri: 
            'https://avatars.githubusercontent.com/u/61329564?v=4'}} 
        style= {{ 
          width: 200, height: 200, alignSelf: 'center', borderRadius: 350, marginTop: 25}}/>
      <Text style={styles.nome}>Felipe Mathias Gameiro</Text> 
      <Text style={styles.titulo}> Dados Pessoais</Text>
      <Text style={styles.subtitulo}> Data de Nascimento: 25/04/1992</Text>
      <Text style={styles.subtitulo}> Altura: 168cm</Text>
      <Text style={styles.titulo}> Formação</Text>
      <Text style={styles.subtitulo}> Tecnólogo em Logística pela Universidade São Judas (2012), Tecnólogo em Comércio Exterior pela Universidade São Judas (2013). Graduando em Sistemas para Internet pela Fatec Rubens Lara.</Text>
      <Text style={styles.titulo}> Experiência </Text>
      <Text style={styles.subtitulo}> Estagiário de Sistemas - Strong Business School - 2020 até 2021</Text>
      <Text style={styles.subtitulo}> Arquiteto de Software - MOVA P2P - 2021 até o momento</Text>
      <Text style={styles.link}onPress={()=>Linking.openURL('https://github.com/gameiro666')}>Acesse meus projetos!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    paddingLeft:5,
    paddingTop:5,
    backgroundColor: 'antiquewhite',

  },

  nome:{
    color: '#002', fontSize: 20, textAlign: 'center', marginTop: 15
  },
  
  link: {
    color: 'white', 
    fontSize: 15,  
    alignSelf: 'center', 
    backgroundColor: 'black', 
    padding: 10, 
    margin: 30
    

  },

  titulo: {
    color: '#002', fontSize: 18, paddingTop:15
  },

  subtitulo: {
    color: '#002', fontSize: 12, padding:5
  }

  


  
};