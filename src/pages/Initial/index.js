import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'
import { NativeBaseProvider, Box, HStack, Pressable, Icon, Center, Heading } from "native-base";
import {Link, useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

export default function Initial(){
    const navigation = useNavigation();

    return(

    
    <NativeBaseProvider config={config}>
        <Box padding={4} flex={1} flexDirection="column" bg={{
            linearGradient: {
                colors:["light.100","green.700"]
            }
        }}>
        
            <HStack  w="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box rounded="md" flexDir="row" alignItems="center">
                    
                    <Pressable>
                    <Icon 
                        as={Feather}
                        name="chevron-left"
                        size={7}
                        color="#408755"
                        />   

                    </Pressable>

                
                    
                    
                <Heading marginLeft={4} size="sm" marginTop={0}
                color="#408755">OLÁ SR(a) PACIENTE!</Heading>
                    
                    
                </Box>

                <Box rounded="md" flexDir="row" alignItems="center">
                    
                    <Pressable>

                    <Icon 
                    as={Feather}
                    name="phone-call"
                    size={7}
                    color="#408755"
                    marginRight={4}
                    />
                    </Pressable>

                    <Pressable>

                        <Icon 
                        as={Feather}
                        name="bell"
                        size={7}
                        color="#408755"
                        marginRight={4}
                        />
                    </Pressable>

                    <Pressable>

                    <Icon 
                        as={Feather}
                        name="menu"
                        size={7}
                        color="#408755"
                        /> 
                    </Pressable>
                </Box>
            </HStack>
            

            <HStack  w="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box rounded="md" flexDir="row" marginTop={5} padding={5} backgroundColor="#408755" borderRadius={30} height={163} width={380} >
                    
                
                    
                    <Box>
                        <Box marginTop={10}>
                            <Heading size="sm" color="#FFF" >POR QUE SE VACINAR?</Heading>
                        </Box>

                        <Box marginLeft={5} alignItems="center" marginTop={4}  backgroundColor="#FFF" borderRadius={30} height={5} width={120}>
                            <Pressable>
                                
                                <Heading size="sm" color="#408755">LEIA AGORA</Heading>
                            </Pressable>
                        </Box>
                    </Box>
                    
                    <Box>
                    <Image
                                    source={require('../../assets/initial.png')}
                                    
                                    resizeMode="contain"
                                />
                    
                    </Box> 
                
                </Box>
            </HStack>

            <Heading size="md" color="#406755" marginLeft={2} marginTop={5}>
                SERVIÇOS
            </Heading>


            
            <HStack w="100%" alignItems="center" justifyContent="space-between" safeArea >
                

                <Box backgroundColor="#89BF9E" rounded="md" flexDir="row" padding={3} height={20} width={390}>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('Agendamento')}>

                        <Icon 
                        as={Feather}
                        name="calendar"
                        size={10}
                        color="#408755"
                        marginRight={12}
                       
                        />
                    <Heading  fontSize='12px'>Agendamento</Heading>
                        
                    </TouchableOpacity> 

                    <TouchableOpacity>

                        <Icon 
                        as={Feather}
                        name="activity"
                        size={10}
                        color="#408755"
                        marginRight={12}
                        marginLeft={5}
                        />
                    <Heading fontSize='12px'>       Exames</Heading>
                    </TouchableOpacity>

                    <TouchableOpacity>

                        <Icon 
                        as={Feather}
                        name="toggle-left"
                        size={10}
                        color="#408755"
                        marginRight={12}
                        marginLeft={5}
                        />
                    <Heading fontSize='12px'>     Medicações</Heading>
                    </TouchableOpacity>

                    <TouchableOpacity>

                    <Icon 
                    as={Feather}
                    name="list"
                    size={10}
                    color="#408755"
                    marginLeft={5}
                    
                    />
                    <Heading fontSize='12px'>       Outros</Heading>
                    </TouchableOpacity>
                    
                    
                </Box>
                
            </HStack>
        </Box>
    </NativeBaseProvider>
        
            
   
        
   
    );
}
