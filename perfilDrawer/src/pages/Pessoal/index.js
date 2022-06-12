import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
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
    marginTop: 18,
    marginHorizontal: 10,
    paddingVertical: 16,
  },
};

export default function Pessoal() {
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
      <View style={styles.wrapper}>
        <Text style={{ ...styles.text, ...styles.title }}>Dados Pessoais</Text>
        <Text style={styles.text}>
          <Text ><b>Nome:</b> </Text>Felipe Mathias Gameiro
        </Text>
        <Text style={styles.text}>
          <Text><b>Data de nascimento:</b> </Text>
          25/04/1992
        </Text>
        <Text style={styles.text}>
          <Text><b>Naturalidade:</b> </Text>
          Santos - SP
        </Text>

        <StatusBar style="light" />
      </View>
    </View>
  );
}