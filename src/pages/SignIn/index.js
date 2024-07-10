import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'
import Register from "../ChoiceCadastro";

export default function SignIn(){
    const navigation = useNavigation();
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
            />


        <Text style={styles.title}>Senha</Text>
                <TextInput
                secureTextEntry={true}
                placeholder="Digite sua senha..."
                style={styles.input}
                />

        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonRegister} 
        onPress={ () => navigation.navigate('ChoiceCadastro')}
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


})import React, { useState } from "react";
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
        let login_valido =  await lerDados(json);
        if(login_valido == true){
            //chama proxima tela
            console.log("Login válido!");
           //let teste = (await api.put('users', json)).data;
            
            //console.log("teste:", teste);
            let user = await (await api.put('users', json)).data;
            navigation.navigate("Initial", user);
        }else{
            //mensagem de erro
            Alert.alert("Login ou senha invalidos!")
        }
    }
    async function lerDados(dado){
        let retorno = false;
        try {
            let response = await api.post('session',dado);
            if(response.data == true) {
                retorno = true;
            }
            return retorno;
        } catch (error) {
            console.log("Algo deu errado:", error);
        }
    }
    /*async function lerDadosTeste(dado){
        let retorno = -1;
        try {
            //let json = await fs.readFileSync('arquivoTeste.json', 'utf8');
            let path = RNFS.DocumentDirectoryPath + '/arquivoTeste.json';
            await RNFS.readFile(path, 'utf8').then(resultado =>{
                let obj = JSON.parse(resultado);
                if((obj.senha == dado.senha) && (obj.email == dado.email)){
                    retorno = 1;
                }else{
                    retorno = 0;

                }
            })
            //let json = fs.readFileAssets()
        } catch (error) {
            console.log(error)
        }
       
        return retorno;
        
    }*/
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