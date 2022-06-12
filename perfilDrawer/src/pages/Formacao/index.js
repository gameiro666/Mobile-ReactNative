import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const styles = {
   title: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
   },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    marginLeft: 16,
    color: 'black',
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
      <Text style={{ ...styles.text, ...styles.title }}>Formação</Text>
      <Text style={styles.text}>
        <Text><b>Cursando:</b></Text> Sistemas para
        Internet - Fatec Rubens Lara 6/6
        </Text>
    <Text style={styles.text}>
        <Text><b>Concluído:</b></Text> Logística Portuária - Universidade São Judas
        Comércio Exterior - Universidade São Judas
        </Text>
        
    </View>
  );
}