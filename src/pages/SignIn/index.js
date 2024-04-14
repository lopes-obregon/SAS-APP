import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import * as Animatable from 'react-native-animatable'
import api from '../../services/api'
import {useNavigation} from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation();
    const [email, setEmail] = useState(''); //armazena os valores de email
    const [senha, setSenha] = useState('');// armazena os valores de senha
    //função para realizar o login
    async function login(){
        //variavel para guardar o formato enviado para a api
        let json ={
            "usuario":email,
            "senha":senha
        }
        try {
            await api.post('/session', json).then(response => {
                Alert.alert("Login realizado com sucesso!");
            })
        } catch (error) {
            Alert.alert(error)
        }
    }
    return (
        <View style={styles.container}>            

           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            
            <Text style={styles.message}>Entre com sua conta</Text>
        </Animatable.View>


        <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Image
                    source={require('../../assets/teste.png')}
                    style= {{width:'100%'}}
                    resizeMode="contain"
                />

        <Text style={styles.title}>E-mail</Text>
            <TextInput
            placeholder="Digite seu e-mail..."
            style={styles.input} 
           
            onChangeText={setEmail}
            />


        <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha..."
                style={styles.input}
                
                onChangeText={setSenha}
                />

        <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonRegister} 
        onPress={ () => navigation.navigate('Cadastro')}
        >
            <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
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
        fontSize: 28,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    containerForm:{
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 500,
        borderTopRightRadius: 500,
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