import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
<<<<<<< HEAD
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/welcome.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Image
          source={require("../../assets/teste.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          O seu atendimento médico {"\n"} no conforto da sua casa{" "}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#408755",
  },
  containerLogo: {
    flex: 0,
    backgroundColor: "#408755",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    color: "#408755",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
=======
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/welcome.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Image
                    source={require('../../assets/teste.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}>
                    O seu atendimento médico {'\n'} no conforto da sua casa
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#408755",
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    image: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        color: '#408755',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#408755',
        borderRadius: 50,
        paddingVertical: 5,
        width: '80%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    }
>>>>>>> dev-renan
});
