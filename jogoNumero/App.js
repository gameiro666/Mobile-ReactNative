import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";

export default function App() {
  const styles = {
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "lightyellow",
    },
    titulo: {
      fontWeight: 'bold',
      color: 'firebrick',
      fontSize: 40,
      marginVertical: 10,
      textAlign: 'center',
      marginTop: 45,
    },
    texto: {
      color: "black",
      fontSize: 70,
      fontWeight: "bold",
      borderwidth: 2,
      borderColor: 'black',
    },
    instrucao: {
      fontSize: 27,
      fontWeight: "bold",
    },
    button: {
      width: 150,
      height: 50,
      margin: 10,
      padding: 10,
      fontSize: 27,
      fontWeight: "bold",
      textAlign: 'center',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 'auto',
      backgroundColor: 'tomato',
    },   
    imagem: {
      width: 220,
      height: 220,
      borderColor: 'tomato',
      marginVertical: 10
    },
    resultado: {
      fontSize: 50,
      textAlign: "center",
      width: 200,
    }
  };
  const [resultado, numeroSorteado] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo do número aleatório</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://pa1.narvii.com/6799/3c0683c634b2f651a6dcf8a132c0cecdbf20fbf6_hq.gif",
          }}
          style={styles.imagem}
        />
      </View>
      <Text style={{ ...styles.instrucao, textAlign: "center", color: "darksalmon" }}>
        Pense em um nº de 0 a 10
      </Text>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ ...styles.resultado, ...styles.texto}}>{resultado}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            let random = Math.floor(Math.random() * 11);
            numeroSorteado(random);
          }}
        >
          <Text style={styles.button}>Descobrir</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </View>
  );
}