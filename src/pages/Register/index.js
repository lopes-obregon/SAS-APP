import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


/* Essa é a primeira página de registro*/ 
export default function Register(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>            

           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            
            <Text style={styles.message}>Cadastre-se</Text>
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
        
        <Text style={styles.title}>Repetir Senha</Text>
                <TextInput
                placeholder="Digite sua senha..."
                style={styles.input}
                />

        <TouchableOpacity style={styles.button} 
        onPress={ () => navigation.navigate('Register2')}>
            <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonRegister} 
        onPress={ () => navigation.navigate('SignIn')}
        >
            <Text style={styles.registerText}>Já possui conta? Entre aqui!</Text>
        </TouchableOpacity>

        </Animatable.View>

        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:'#408755',


    },
    containerHeader:{
        
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',
    },
    message:{
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerForm:{
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '10%',
        paddingEnd: '10%',

    },
    title:{
        fontWeight: 'bold',
        color: '#408755',
        fontSize:20,
        marginTop: 40,
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#408755',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText:{
        color: '#408755',
        
    }


})