import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function SignIn(){
    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-Vindo(a)</Text>
           </Animatable.View>


        <Animatable.View animation="fadeInUp" style={styles.containerForm}>


        <Text style={styles.title}>E-mail</Text>
            <TextInput
            placeholder="Digite seu e-mail..."
            style={styles.input}
            />

        <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha..."
                style={styles.input}
                />

        <TouchableOpacity>
            
        </TouchableOpacity>


        </Animatable.View>

        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{

    }
})