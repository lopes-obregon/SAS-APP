import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'
import Agendamento2 from "../Agendamento2";


/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

/* Aqui será a página de agendamento*/ 
export default function Agendamento(){
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
                    
                        <Box rounded="md" flexDir="row" alignItems="center">
                            <TouchableOpacity
                                    onPress={ () => navigation.navigate('Initial')}>
                                    <Icon 
                                        as={Feather}
                                        name="chevron-left"
                                        size={7}
                                        color="#408755"
                                        />   
                            </TouchableOpacity>
                            <Heading marginLeft={4} size="lg" 
                                color="#408755">Pré Agendamento</Heading>
                                    
                        </Box>

                        
                        
                        <Box  marginTop={5} marginLeft={3} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={350} height={110}>  
                            <Box flexDir="row">
                                        <Image marginLeft={15}
                                        marginTop={10} borderRadius={30}
                                        
                                        source={require('../../assets/doctor.png')}
                                            
                                        
                                        />

                                <Heading marginLeft={2} marginTop={2}size="md" 
                                color="#408755">Doutora Equipe Idelfonso{'\n'}
                               
                                    <Heading marginLeft={4} marginTop={2}size="sm" fontWeight="light"
                                    color="black">Clinico Geral

                                    </Heading>

                                </Heading>

                            </Box>
                           


                        </Box>
                        
                        <Box>

                            <Heading marginTop={10} marginLeft={3} size="md" 
                            color="#408755">Pré Agendamento para:</Heading>

                            <Text marginLeft={15} marginRight={5} style={styles.title}>Paciente</Text>
                            <TextInput marginLeft={15} marginRight={5}
                            placeholder="Digite o nome completo do paciente..."
                            style={styles.input}
                            />


                            <Text marginLeft={15} marginRight={5} style={styles.title}>Cartão SUS</Text>
                            <TextInput marginLeft={15} marginRight={5}
                            placeholder="Digite o cartão SUS do paciente..."
                            style={styles.input}
                            />
                        </Box>

                        <Text  marginLeft={15} style={styles.title}>Quem é o Paciente ?</Text>
                        <Box flexDir="row">
                        
                        <TouchableOpacity>
        
                        <Image marginLeft={15}
                                        marginTop={10} borderRadius={30}
                                        
                                        source={require('../../assets/eu.png')}
                                            
                                        
                                        />
                        </TouchableOpacity>

                        <TouchableOpacity>
        
                        <Image marginLeft={15} marginBottom={150}
                                        marginTop={10} borderRadius={30}
                                        
                                        source={require('../../assets/filho.png')}
                                            
                                        
                                        />
                        </TouchableOpacity>
                        </Box>

                        <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Agendamento2')}
                >
                    <Text style={styles.buttonText}>PRÓXIMO</Text>
                </TouchableOpacity>

                    </Box>    
                </NativeBaseProvider>   
            </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color: '#408755',
        fontSize:15,
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    }


})