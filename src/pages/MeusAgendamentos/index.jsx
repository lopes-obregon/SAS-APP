import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Icon, NativeBaseProvider, Heading, Box, Center } from "native-base";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";

/* Aqui é a configuração do gradiente do background */
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

// Função para consultar os agendamentos na API
async function consultaAgendamentos(user) {
  try {
    let dados = await api.put("/meusagendamentos", {
      cadastro_sus: user?.cadastro_sus,
    });
    return dados.data;
  } catch (error) {
    console.error("Erro ao consultar agendamentos:", error);
    return null;
  }
}

/* Aqui será a página de agendamento */
export default function MeusAgendamentos(props) {
  const navigation = useNavigation();
  const { user } = props;
  const [agendamentos, setAgendamentos] = useState([]);
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    async function fetchAgendamentos() {
      console.log("TELA DOS MEUS AGENDAMENTOS");
      const dados = await consultaAgendamentos(user);
      if (dados) {
        setAgendamentos(dados.agendamentos || []);
        setMedicos(dados.médicos || []);
      }
    }
    fetchAgendamentos();
  }, [user]);

  // Função para obter o nome do médico pelo ID
  const getNomeMedico = (medicoCnes) => {
    console.log("Meus médicos:", medicos);
    const medico = medicos.find((med) => med?.cadastro_sus === medicoCnes);
    return medico ? medico.nome : "Desconhecido";
  };

  return (
    <ScrollView>
      <NativeBaseProvider config={config}>
        <Box
          padding={4}
          flex={1}
          flexDirection="column"
          bg={{
            linearGradient: {
              colors: ["#F3F3F3", "green.400"],
            },
            /* Configurações do Gradiente */
          }}
        >
          <Box rounded="md" flexDir="row" alignItems="center">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Icon as={Feather} name="chevron-left" size={7} color="#408755" />
            </TouchableOpacity>

            <Heading marginLeft={4} size="lg" color="#408755">
              Meus Agendamentos
            </Heading>
          </Box>

          {agendamentos.map((agendamento, index) => (
            <Box
              key={index}
              marginTop={5}
              marginLeft={3}
              align="center"
              backgroundColor="#FFFFFF"
              borderRadius={30}
              width={360}
              height={110}
            >
              {console.log("agendamento:", agendamento)}
              <Box flexDir="row">
                <Image
                  marginLeft={15}
                  marginTop={10}
                  borderRadius={30}
                  source={require("../../assets/doctor.png")}
                />

                <Heading marginLeft={2} marginTop={2} size="md" color="#408755">
                  {agendamento.hora +
                    ":" +
                    (agendamento?.minuto < 10
                      ? "0" + agendamento?.minuto
                      : agendamento?.minuto)}
                  {"\n"}
                  <Heading
                    marginLeft={4}
                    marginTop={2}
                    size="sm"
                    fontWeight="light"
                    color="black"
                  >
                    {agendamento?.dia + "/"}
                    {agendamento?.mes <= 9
                      ? "0" + agendamento?.mes
                      : agendamento?.mes}
                    {"/2024"}
                    {"\n"}
                  </Heading>
                  <Heading
                    marginLeft={4}
                    marginTop={2}
                    size="sm"
                    fontWeight="bold"
                    color="black"
                  >
                    Clinico geral - Doutor(a) {getNomeMedico(agendamento?.cnes)}
                  </Heading>
                </Heading>
              </Box>
            </Box>
          ))}

          <Box>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Box>
        </Box>
      </NativeBaseProvider>
    </ScrollView>
  );
}
