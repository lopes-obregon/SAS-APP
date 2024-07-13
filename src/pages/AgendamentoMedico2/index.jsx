import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  Title,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Icon, NativeBaseProvider, Heading, Box, Center } from "native-base";
import * as Animatable from "react-native-animatable";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  Calendar,
  Agenda,
  CalendarList,
  AgendaList,
} from "react-native-calendars";
import api from "../../services/api";

/*Aqui é a configuração do gradiente do background*/
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

/*Essa é a segunda página do agendamento */
export default function AgendamentoMedico2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { cpf, nome, idade, card_sus, endereço, user } = route.params;
  const [loading, setLoading] = useState(false);
  console.log("Dados enviados:", {
    cpf,
    nome,
    idade,
    card_sus,
    endereço,
    user,
  });
  let hora_selecionado = undefined;
  let dia_selecionado = undefined;

  const handleItemPress = (selectedItem) => {
    console.log("hora:", selectedItem);
    hora_selecionado = selectedItem;
  };

  async function salvarAgendamento() {
    setLoading(true);
    let data_atual = new Date();
    let data_selecionado = new Date(dia_selecionado);
    console.log("Salvar agendamento!");
    console.log(
      "testa da condição:",
      data_selecionado.getDate() >= data_atual.getDate() &&
        data_selecionado.getMonth() + 1 >= data_atual.getMonth() + 1
    );
    if (dia_selecionado == undefined || hora_selecionado == undefined) {
      Alert.alert(
        "Dia ou Hora não selecionado",
        "Por favor selecione uma data e depois alguma hora!"
      );
    } else if (
      data_selecionado.getDate() >= data_atual.getDate() &&
      data_selecionado.getMonth() + 1 >= data_atual.getMonth() + 1
    ) {
      //hora_dia_indisponivel_dic.set(dia_selecionado, hora_selecionado);
      let json = {
        cpf,
        nome,
        idade,
        card_sus,
        endereço,
        data: dia_selecionado,
        hora: hora_selecionado,
        user,
      };
      console.log("Json enviado:", json);

      api
        .post("/agendamento", json)
        .then(() => {
          Alert.alert("Sucesso!", "Paciente agendado com sucesso!");
          navigation.navigate("Home", {
            screen: "Início",
            params: { user: user },
          });
        })
        .catch((err) => {
          Alert.alert("Erro", "Sinto muito algum dado está incorreto!");
          console.log("ERRO:", err);
          setLoading(false);
        });
    } else {
      Alert.alert(
        "Data invalida",
        "Data tem que ser maior ou igual que data atual!"
      );
    }
  }

  return (
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AgendamentoMedico", { user: user })
            }
          >
            <Icon as={Feather} name="chevron-left" size={7} color="#408755" />
          </TouchableOpacity>

          <Heading marginLeft={4} size="lg" color="#408755">
            Agendamento
          </Heading>
        </Box>

        <Box
          marginTop={5}
          align="center"
          backgroundColor="#FFFFFF"
          borderRadius={30}
          width={380}
          height={530}
        >
          <Box marginTop={5}>
            <Calendar
              onDayPress={(day) => {
                console.log("selected day", day.dateString);
                dia_selecionado = day.dateString;
              }}
            />
          </Box>

          <Text style={styles.title} marginBottom={20}>
            Selecionar Horário
          </Text>
          <Box>
            <FlatList
              data={["08:00", "09:00", "10:00", "13:00", "14:00", "15:00"]}
              horizontal
              contentContainerStyle={{
                paddingLeft: 10,
              }}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  key={item}
                  width="70px"
                  height="80px"
                  spacing="0 10px 0 0"
                  rounded="10px"
                  direction="column"
                  justify="center"
                  align="center"
                  onPress={() => handleItemPress(item)}
                >
                  <Text small>{item}</Text>
                  <Text small> AM</Text>
                </TouchableOpacity>
              )}
            />
          </Box>
        </Box>

        <Box marginTop={16}>
          <TouchableOpacity
            style={styles.button}
            onPress={salvarAgendamento}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>CONFIRMAR</Text>
            )}
          </TouchableOpacity>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },

  title2: {
    fontWeight: "bold",
    color: "#408755",
    fontSize: 18,
  },

  input: {
    borderBottomWidth: 2,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    position: "absolute",
    backgroundColor: "#408755",
    borderRadius: 50,
    paddingVertical: 5,
    width: "80%",
    alignSelf: "center",
    bottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonStyle: {
    flex: 1,
    paddingLeft: 25,
    backgroundColor: "#EDEDED",
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 10,
    width: 80,
  },
});
