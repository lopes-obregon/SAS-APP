import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from "react-native";
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import api from "../../services/api";
export default function Cadastro2(props){
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_nascimento, setDataNascimento] = useState('');
    const [cadastro_sus, setCadastroSus] = useState('');
    const [endereco, setEndereco] = useState('');
    const [unidade_de_saude, setUnidadeDeSaude] = useState('');
    const {email, senha} = props.route.params;
    //console.log("props:", props.route);
    async function cadastro(){
        let cadastro = await salvarDados();
        try {
           if(cadastro == true){
                Alert.alert('Cadastro realizado com sucesso!');
                navigation.navigate('SignIn');
            }else{
               Alert.alert('Parece que algo deu errado!');
           }
        } catch (error) {
            console.log(error);
        }
    }
    async function salvarDados(){
        let cadastro_sucesso = false;
        let dados = {
            usuario:email,
            senha:senha,
            nome:nome,
            cpf:cpf,
            data_nascimento:data_nascimento,
            cadastro_sus:cadastro_sus,
            endereco:endereco,
            unidade_saude:unidade_de_saude
        }
        try {
            console.log(dados);
            await api.post('users', dados).then(()=> cadastro_sucesso = true);
        } catch (error) {
            console.log("Algo deu errado:",error)
        }finally{
            return cadastro_sucesso;
        }

    }
   /* async function salvarDadosTeste(){
        let data = {
            nome:nome,
            cpf:cpf,
            data_nascimento:data_nascimento,
            cadastro_sus:cadastro_sus,
            endereco:endereco,
            unidade_de_saude:unidade_de_saude,
            email:email,
            senha:senha
        }
        let json_salvar = JSON.stringify(data,null,2);
        let retorno = -1;
        let path = RNFS.DownloadDirectoryPath + '/arquivoTeste.json'
        try {
            RNFS.writeFile(path, json_salvar, 'utf8').then(()=>{
                retorno = 1;

            });
            //await fs.writeFileSync('arquivoTeste.json', json_salvar);
            
        } catch (error) {
            console.log(error)    
            retorno = 0;        
        }
        return retorno;

    }*/
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>            

           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            
            <Text style={styles.message}>Cadastre-se</Text>
        </Animatable.View>


        <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        

        <Text style={styles.title}>Nome</Text>
            <TextInput
            placeholder="Digite seu nome completo..."
            style={styles.input}
            onChangeText={setNome}
            />


        <Text style={styles.title}>CPF</Text>
                <TextInput
                placeholder="Digite seu CPF..."
                style={styles.input}
                onChangeText={setCpf}
                />
        
        <Text style={styles.title}>Data de Nascimento</Text>
                <TextInput
                placeholder="dd/mm/aaaa"
                style={styles.input}
                onChangeText={setDataNascimento}
                />
        
        <Text style={styles.title}>Cadastro SUS</Text>
                <TextInput
                placeholder="Digite seu cartão SUS..."
                style={styles.input}
                onChangeText={setCadastroSus}
                />

        <Text style={styles.title}>Endereço</Text>
                <TextInput
                placeholder="Digite seu endereço..."
                style={styles.input}
                onChangeText={setEndereco}
                />

         <Text style={styles.title}>Unidade de Saúde</Text>
                <TextInput
                placeholder="Digite sua UBS..."
                style={styles.input}
                onChangeText={setUnidadeDeSaude}
                />

        <TouchableOpacity 
        style={styles.button}
        onPress={cadastro}
        >
            <Text style={styles.buttonText}>Finalizar Cadastro</Text>
        </TouchableOpacity>

        </Animatable.View>

        </SafeAreaView>
        </ScrollView>
       
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
        marginBottom:14,
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