import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Vaga from "./components/Vaga";
export default function App() {
  const vagas = [
    {
      titulo: "Scrum Master",
      salario: 6500,
      descricao:
        "Auxiliar a implementação de metodologias ágeis em projetos de desenvolvimento. Supervisionar ritos de Scrum ao longo das sprints dos projetos.",
      contato: "vagas@headhunters.com.br",
    },
    {
      titulo: "Desenvolvedor Back-End Senior",
      salario: 14000,
      descricao:
        "Atuar no desenvolvimento de sistema contábil de uma empresa Canadense. Sólida experiência em Java, Apache e Metodologias Ágeis.",
      contato: "vagas@headhunters.com.br",
    },
    {
      titulo: "Estagiário de Suporte",
      salario: 1200,
      descricao:
        "Auxiliar o time de Suporte com tickets de atendimento nível I.",
      contato: "queromecandidatar@suporteletric.com.br",
    },
    {
      titulo: "Desenvolvedor Full-Stack Pleno",
      salario: 9100,
      descricao:
        "Atuar na migração de um sistema legado para o framework React. Necessário sólido conhecimento em .ASP Clássico e desejável conhecimento nos frameworks JavaScript mais atuais.",
      contato: "vagas@headhunters.com.br",
    },
    {
      titulo: "Desenvolvedor Back-End Senior",
      salario: 14000,
      descricao:
        "Atuar no desenvolvimento de sistema contábil de uma empresa Canadense. Sólida experiência em Java, Apache e Metodologias Ágeis.",
      contato: "vagas@headhunters.com.br",
    },
    {
      titulo: "Desenvolvedor Front-End Junior",
      salario: 4000,
      descricao:
        "Atuar no desenvolvimento aplicações responsivas utilizando o framework Vue.JS",
      contato: "vagas@headhunters.com.br",
    },
  ];
  ;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas de TI</Text>
      <View style={{ height: 500, marginTop: 10 }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {vagas.map(vaga => {
            return (
              <Vaga
                titulo={vaga.titulo}
                salario={vaga.salario}
                descricao={vaga.descricao}
                contato={vaga.contato}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'indigo',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 45,
    color: "floralwhite",
    marginVertical: 5,
    marginTop: 45,
    textAlign: "center"  
  },
});