import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Anuncio from "./components/Anuncio";
export default function App() {
  const anuncios = [
    {
      foto: "https://www.timbres.com.br/a/mg101-cfx-amplificador-marshall-carbon-fiber-mg101-cfx-100w/amplificador-marshall-guitarra-carbon-fiber-100w---mg101cfx--1_1000x1000-50.png",
      titulo: "Amplificador Marshall",
      body: "Amplificador Marshall estilo 'combo' com caixa acoplada, possuindo 100W de potência. Funcionando perfeitamente. Possui marcas de uso.",
      preco: 2000,
    },
    {
      foto: "http://cdn1.appsisecommerce.com.br/clientes/cliente1614/produtos/136576/L6480.png",
      titulo: "Baterial Pearl",
      body: "Bateria Pearl Export. Aproximadamente 02 anos de uso, acompanha ferragens. Acompanha prato de condução.",
      preco: 3750,
    },
    {
      foto: "https://www.seekpng.com/png/full/415-4150966_guitarra-electrica-epiphone-ensvhsvch1-les-paul-special-epiphone.png",
      titulo: "Guitarra Epiphone Les Paul",
      body: "Guitarra elétrica Epiphone Les Paul Special Sunburst. Funcionando perfeitamente. Captadores Seymour Duncan.",
      preco: 1450,
    },
    {
      foto: "https://beat360.com.br/wp-content/uploads/2021/05/Baixo-Eletrico-Fender-Squier-Affinity-J.-BASS-V-LR-Brown-Sunburst-tabela.png",
      titulo: "Baixo Fender Squier Affinity",
      body: "Baixo Elétrico Fender Squier Affinity na coloração Brown Sunburst. Fabricado em 2017, foi usado pouquíssimas vezes.",
      preco: 2000,
    },
    {
      foto: "https://www.teclacenter.com.br/images/thumbnails/288/288/detailed/22/violao-takamine-ef381-20296.png",
      titulo: "Violão Takamine",
      body: "Violão Acústico Takamine EF381. Possui encordoamento de aço, braço em Mahogany e tampo em Spruce. Poucas marcas de uso. ",
      preco: 750
    }
    
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <View style={{ height: 500, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {anuncios.map(anuncio => {
            return (
              <Anuncio
                key={Math.random()}
                src={anuncio.foto}
                title={anuncio.titulo}
                body={anuncio.body}
                price={anuncio.preco}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "silver",
  },
  titulo: {    
    fontWeight: "bold",
    color: "black",
    fontSize: 45,
    marginVertical: 10,
    textAlign: "center",
    marginTop: 45,
  },
});