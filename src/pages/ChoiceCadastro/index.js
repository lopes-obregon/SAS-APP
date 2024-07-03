import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Touchable, Title, FlatList } from "react-native";
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons';
import { Calendar, Agenda, CalendarList, AgendaList } from "react-native-calendars";



/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

/*Essa é a página de perfil do usuário */ 
export default function ChoiceCadastro(){
    const navigation = useNavigation();

    return(
        
        
        <NativeBaseProvider config={config}>
            <Box padding={2} flex={1} flexDirection="column" bg={{
                linearGradient: {
                    colors:["green.800", "#000000"]
                }
                /* Configurações do Gradiente */
                
            }}>
                {/* Seta para voltar */}
                    <Box rounded="md" flexDir="row" alignItems="center">
                        <TouchableOpacity
                                onPress={ () => navigation.navigate('Home')}>
                                <Icon 
                                    as={Feather}
                                    name="chevron-left"
                                    size={7}
                                    color="#408755"
                                    />   
                        </TouchableOpacity>

                      
                                
                    </Box>
                    {/* Imagem de perfil */}
                   <Box style={{ alignSelf: "center"}}>
                    <Box style={styles.profileImage}>
                        <Image source={require("../../assets/sasb.png")} style={styles.image}>

                        </Image>
                    </Box>

                   </Box>

                    {/* Informações perfil */}
                   <Box style={styles.infoContainer}>
                    <Text style={[styles.title, {fontWeight:"500", fontSize: 36 }]}>CADASTRO</Text>
                    <Text style={[styles.title, {fontWeight:"300", fontSize: 20 }]}>EU SOU UM:</Text>
                   
                   </Box>

                   <Box marginBottom={5} rounded="md" flexDir="row" alignItems="center">


                    <Box>
                    <TouchableOpacity 
                    style={styles.buttonRegister} 
                    onPress={ () => navigation.navigate('Register')}
                    >
                        <Image source={require("../../assets/paciente.png")} >
                   </Image>
                    </TouchableOpacity>
                        
                   </Box>
                   
                   <Box>
                   <TouchableOpacity 
                    style={styles.buttonRegister} 
                    onPress={ () => navigation.navigate('SignIn')}
                    >
                        <Image source={require("../../assets/profissional.png")}>

                        </Image>
                    </TouchableOpacity>
                   
                   
                   </Box>
                   
                   </Box>
                   <Box >
                   <TouchableOpacity 
                    style={styles.buttonRegister} 
                    onPress={ () => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.registerText}>Já possui conta? Entre aqui!</Text>
                    </TouchableOpacity></Box>
                        
            </Box>
        </NativeBaseProvider>
       
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        color: '#FFF',
        
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
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },
    image:{
        flex:1,
        width: undefined,
        height: undefined,
    },

    buttonRegister:{
       
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        
    },

    registerText:{
        color: '#408755',
        
    }



})