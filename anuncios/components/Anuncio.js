import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    titulo: {
      fontWeight: "bold",
      color: "floralwhite",
      fontSize: 25,
      marginVertical: 10,
      textAlign: "center",
      marginTop: 45,
    },
    text: {
      color: "floralwhite",
      fontSize: 45,
      fontWeight: "bold"
    },
    img: {
      width: 150,
      height: 150
    },
    body: {
      color: "floralwhite",
      width: 300,
    },
    anuncio: {
      margin: 20,
      width: 350,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 5,
      borderColor: 'floralwhite',
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: 'gray',
    },
  });

const Anuncio = ({ src, title, body, price }) => {
  return (
    <View style={styles.anuncio}>
      <Image source={{ uri: src }} style={styles.img} />
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text
        style={{
          ...styles.body,
          fontSize: 30,
          color: "white",
          backgroundColor: "forestgreen",
          marginVertical: 20,
          textAlign: 'center',
        }} >R$ {price.toFixed(2)}
      </Text>
    </View>
  );
};
export default Anuncio;