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
export default function Profile(){
    const navigation = useNavigation();

    return(

        
        <NativeBaseProvider config={config}>
            <Box padding={4} flex={1} flexDirection="column" bg={{
                linearGradient: {
                    colors:["#F3F3F3","green.400"]
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

                        <Heading marginLeft={4} size="lg" 
                            color="#408755">Perfil</Heading>
                                
                    </Box>
                    {/* Imagem de perfil */}
                   <Box style={{ alignSelf: "center"}}>
                    <Box style={styles.profileImage}>
                        <Image source={require("../../assets/profile-pic2.jpg")} style={styles.image} resizeMode="center">

                        </Image>
                    </Box>

                   </Box>

                    {/* Informações perfil */}
                   <Box style={styles.infoContainer}>
                    <Text style={[styles.title, {fontWeight:"500", fontSize: 36 }]}>Paciente da Silva</Text>
                    <Text style={[styles.title, {fontWeight:"300", fontSize: 20 }]}>30 anos, UBS VILA ROSA</Text>
                   
                   </Box>

                   <Box marginTop={30}>
                   <TouchableOpacity style={styles.button}
                    onPress={ () => navigation.navigate('')}>
                        <Text style={styles.buttonText}>Visualizar informações pessoais</Text>
                    </TouchableOpacity>
                   </Box>
                        
            </Box>
        </NativeBaseProvider>
    )
}

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
        marginTop: 18,
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
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 2,
    }

})import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


/*Essa é a página de perfil do usuário */ 
export default function Profile(){
    const navigation = useNavigation();

    return(

            
    <Text>Página de Perfil</Text>
        
   
    );
}