import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image , ScrollView, Linking} from "react-native";
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import { Feather } from '@expo/vector-icons';

/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

export default function Feed(){
    const navigation = useNavigation();

    return(
        <ScrollView>
        <NativeBaseProvider config={config}>
        <Box padding={4} flex={1} flexDirection="column" bg={{
            linearGradient: {
                colors:["#F3F3F3","green.400"]
            }
            /* Configurações do Gradiente */
            
        }}>
            {/* Seta de voltar*/}
            <Box rounded="md" flexDir="row" alignItems="center" marginBottom={10}>
                <TouchableOpacity
                onPress={ () => navigation.navigate('Home')}>
                        <Icon 
                            as={Feather}
                            name="chevron-left"
                            size={7}
                            color="#408755"
                            />   
                </TouchableOpacity>

                <Heading marginLeft={4} size="lg" 
                color="#408755">Informações Educacionais</Heading>
                                        
            </Box>

            <TouchableOpacity onPress={linkExternal1}>
            <Box 
            flex={1}
            flexDir="column"
            marginBottom={4}
            backgroundColor="#FFF" 
            padding={2} 
            borderRadius={4}>

            <Heading color={"#408755"}>A importância da vacinação (em todas as idades) </Heading>
            <Box>

                        <Image source={require("../../assets/header.png")}>

                        </Image>
            </Box>

            <Box marginY={3} padding={1}>
                <Text numberOfLines={4}>O desenvolvimento da vacina contra a COVID-19 foi um marco e simboliza a esperança de que venceremos a pandemia. No Brasil, a vacinação começou em janeiro e seus efeitos já são notados: as mortes por COVID-19 de idosos com 80 anos ou mais caiu pela metade. É o que aponta um estudo feito por pesquisadores da Universidade Federal de Pelotas (UFPel), em parceria com a Universidade de Harvard, nos Estados Unidos. </Text>
            </Box>
                
            </Box>
            </TouchableOpacity>


            <TouchableOpacity onPress={linkExternal2}>
            <Box 
            flex={1}
            flexDir="column"
            marginBottom={4}
            backgroundColor="#FFF" 
            padding={2} 
            borderRadius={4}>
                <Heading color={"#408755"}>Como as escolhas de alimentação podem afetar a saúde emocional </Heading>
            <Box>

                        <Image source={require("../../assets/1.png")}>

                        </Image>
            </Box>

            <Box marginY={3} padding={1}>
                <Text numberOfLines={4}>Não é novidade para ninguém o quanto uma dieta equilibrada e saudável faz bem para saúde, mas você sabia que ela está relacionada com a saúde emocional?</Text>
            </Box>
            </Box>
            </TouchableOpacity>
            
            
            <TouchableOpacity onPress={linkExternal3}>
            <Box 
            flex={1}
            flexDir="column"
            marginBottom={4}
            backgroundColor="#FFF" 
            padding={2} 
            borderRadius={4}>
                <Heading color={"#408755"}>O que é e como surge o câncer?</Heading>
            <Box>

                        <Image source={require("../../assets/2.png")}>

                        </Image>
            </Box>

            <Box marginY={3} padding={1}>
                <Text numberOfLines={4}>Existem mais de 100 tipos de câncer e a melhor forma de evitar que a doença se desenvolva é a Prevenção.</Text>
            </Box>
            </Box>
            </TouchableOpacity>

        </Box>
        </NativeBaseProvider>
        </ScrollView>
    
   
    );
}

function linkExternal1(){
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/doencas-comuns/infografico-importancia-vacinacao');
  }

  const linkExt1 = (() => {
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/doencas-comuns/infografico-importancia-vacinacao');
  })

  function linkExternal2(){
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/saude-da-mente/alimentacao-saude-emocional');
  }

  const linkExt2 = (() => {
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/saude-da-mente/alimentacao-saude-emocional');
  })

  function linkExternal3(){
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/oncologia-cancer/oque-e-cancer');
  }

  const linkExt3 = (() => {
    Linking.openURL('https://painel.programasaudeativa.com.br/materias/oncologia-cancer/oque-e-cancer');
  })


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        color: '#408755',
        
    },

    title2:{
        fontWeight: 'bold',
        color: 'black',
        fontSize:18,
        marginTop: 30,
    },

    input:{
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        position: 'absolute',
        backgroundColor:'#408755',
        borderRadius:50,
        paddingVertical:5,
        width: '80%',
        alignSelf: 'center',
        bottom:'10%',
        alignItems: 'center',
        justifyContent: 'center'


    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
    },
    profileImage:{
        marginTop: 0,
        width: 400,
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
    },
    image:{
        flex:1,
        width: undefined,
        height: undefined,
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 2,
    }
})