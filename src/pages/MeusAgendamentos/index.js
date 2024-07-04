import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'



/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

/* Aqui será a página de agendamento*/ 
export default function MeusAgendamentos(){
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
                                    onPress={ () => navigation.navigate('Home')}>
                                    <Icon 
                                        as={Feather}
                                        name="chevron-left"
                                        size={7}
                                        color="#408755"
                                        />   
                            </TouchableOpacity>

                            <Heading marginLeft={4} size="lg" 
                                color="#408755">Meus Agendamentos</Heading>
                                    
                        </Box>

                        <Box  marginTop={5} marginLeft={3} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={360} height={110}>  
                            <Box flexDir="row">
                                        <Image marginLeft={15}
                                        marginTop={10} borderRadius={30}
                                        
                                        source={require('../../assets/doctor.png')}
                                            
                                        
                                        />
                                
                                <Heading marginLeft={2} marginTop={2}size="md" 
                                color="#408755">8:00{'\n'}
                                    <Heading marginLeft={4} marginTop={2}size="sm" fontWeight="light"
                                    color="black">08/07/2024 - Segunda Feira{'\n'}

                                    </Heading>
                                    <Heading marginLeft={4} marginTop={2}size="sm" fontWeight="bold"
                                    color="black">Clinico Geral - Doutora Carla

                                    </Heading>

                                </Heading>

                                

                            </Box>

                            
                        </Box>

                        <Box  marginTop={5} marginLeft={3} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={360} height={110}>  
                            <Box flexDir="row">
                                        <Image marginLeft={15}
                                        marginTop={10} borderRadius={30}
                                        
                                        source={require('../../assets/dentista.png')}
                                            
                                        
                                        />
                                
                                <Heading marginLeft={2} marginTop={2}size="md" 
                                color="#408755">10:00{'\n'}
                                    <Heading marginLeft={4} marginTop={2}size="sm" fontWeight="light"
                                    color="black">15/07/2024 - Segunda Feira{'\n'}

                                    </Heading>
                                    <Heading marginLeft={4} marginTop={2}size="sm" fontWeight="bold"
                                    color="black">Dentista - Doutora Mariana

                                    </Heading>

                                </Heading>

                                

                            </Box>

                            
                        </Box>

                        <Box>
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                            {'\n'}
                        </Box>
                        
                </Box>
      
                </NativeBaseProvider>   
            </ScrollView>
       
    );
}
