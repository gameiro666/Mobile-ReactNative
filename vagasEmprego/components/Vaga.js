import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  titulo: {
    marginTop: 5,
    fontWeight: "bold",
    color: "black",
    fontSize: 24
  }, 
  body: {
    color: 'dimgrey',
    marginVertical: 5,
  },
  vaga: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: 'darkorange',
  },
});
const Vaga = ({ titulo, salario, descricao, contato }) => {
    return (
      <View style={styles.vaga}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text
          style={{
            ...styles.body,
            fontSize: 20,
            color: 'floralwhite',
            padding: 5,
            backgroundColor: 'yellowgreen',
            marginVertical: 20,
          }}
        >
          Salário: R$ {salario.toFixed(2)}
        </Text>
        <Text style={styles.body}>Descrição: {descricao}</Text>
        <Text style={styles.body}>Contato: {contato}</Text>
      </View>
    );
  };
export default Vaga;