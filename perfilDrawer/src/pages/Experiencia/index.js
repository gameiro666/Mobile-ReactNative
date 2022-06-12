import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    marginLeft: 16,
    color: 'black',
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
  },
  img: {
    width: 250,
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: 48,
  },
  wrapper: {
    backgroundColor: 'white',
    marginTop: 18,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 16,
  },
};

export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          paddingBottom: 10,
          paddingTop: 30,
          backgroundColor: 'coral',
        }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: 'black',
          }}
        >
          Menu
        </Text>
      </Pressable>
      <Text style={{ ...styles.text, ...styles.title }}>Experiência</Text>
      <Text style={styles.text}>
        <Text><b>BSI Sistemas de Gestão:</b> </Text>Assistente de Planejamento
      </Text>
      <Text style={styles.text}>
        <Text><b>Strong Business School:</b> </Text>Estagiário de Sistemas
      </Text>
      <Text style={styles.text}>
        <Text><b>MOVA P2P:</b> </Text>Estagiário de Arquitetura de Software,  Analista de Produtos Jr.,  Analista de Produtos Pleno
      </Text>      
    </View>
  );
}