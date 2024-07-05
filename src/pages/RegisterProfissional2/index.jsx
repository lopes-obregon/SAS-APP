import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
export default function RegisterProfissional2(props) {
  const navigation = useNavigation();
  const { email, senha } = props.route.params;
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [data_nascimetno, setDataNascimetno] = useState("");
  const [cnes, setCnes] = useState("");
  const [endereço, setEndereço] = useState("");
  const [unidade_saúde, setUnidadeDeSaúde] = useState("");

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Cadastre-se</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            placeholder="Digite seu nome completo..."
            style={styles.input}
            onChangeText={(text) => setNome(texte)}
          />

          <Text style={styles.title}>CPF</Text>
          <TextInput
            placeholder="Digite seu CPF..."
            style={styles.input}
            onChangeText={(text) => setCpf(text)}
          />

          <Text style={styles.title}>Data de Nascimento</Text>
          <TextInput
            placeholder="dd/mm/aaaa"
            style={styles.input}
            onChangeText={(text) => setDataNascimetno(text)}
          />

          <Text style={styles.title}>CNES</Text>
          <TextInput
            placeholder="Digite seu CNES"
            style={styles.input}
            onChangeText={(text) => setCnes(text)}
          />

          <Text style={styles.title}>Endereço</Text>
          <TextInput
            placeholder="Digite seu endereço..."
            style={styles.input}
            onChangeText={(text) => setEndereço(text)}
          />

          <Text style={styles.title}>Unidade de Saúde</Text>
          <TextInput
            placeholder="Digite sua UBS..."
            style={styles.input}
            onChangeText={(text) => setUnidadeDeSaúde(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Finalizar Cadastro</Text>
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </ScrollView>
  );
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#408755",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: "10%",
    paddingEnd: "10%",
  },
  title: {
    fontWeight: "bold",
    color: "#408755",
    fontSize: 20,
    marginTop: 40,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#408755",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#408755",
  },
});
