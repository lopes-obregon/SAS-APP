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


/*Essa é a segunda página do agendamento */ 
export default function AgendamentoMedico2(){
    const navigation = useNavigation();

    return(

        
        <NativeBaseProvider config={config}>
            <Box padding={4} flex={1} flexDirection="column" bg={{
                linearGradient: {
                    colors:["#F3F3F3","green.400"]
                }
                /* Configurações do Gradiente */
                
            }}>
                
                    <Box rounded="md" flexDir="row" alignItems="center">
                        <TouchableOpacity
                                onPress={ () => navigation.navigate('AgendamentoMedico')}>
                                <Icon 
                                    as={Feather}
                                    name="chevron-left"
                                    size={7}
                                    color="#408755"
                                    />   
                        </TouchableOpacity>

                        <Heading marginLeft={4} size="lg" 
                            color="#408755">Agendamento</Heading>
                                
                    </Box>

                    <Box  marginTop={5} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={380} height={530}>
                        <Box marginTop={5}>
                        <Calendar
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        />
                        </Box>

                        <Text style={styles.title} marginBottom={20}>Selecionar Horário</Text>

                        <Box >
                            
                        <FlatList 
                        data={['a','b','c','d','e','f']}
                        horizontal
                        contentContainerStyle={{
                            paddingLeft:10,
                        }}
                        
                        keyExtractor={(item) => item}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.buttonStyle}
                            key={item}
                            width="70px"
                            height="80px"
                            spacing= "0 10px 0 0"
                            rounded="10px"
                            direction="column"
                            justify="center"
                            align="center"
                          
                            
                            >
                               
                                
                                <Text   small>10:00</Text>
                                <Text small>  AM</Text>

                            </TouchableOpacity>
                        )}
                        />
                    
                        </Box>


                        </Box>
                    
                        <Box marginTop={16}>
                        <TouchableOpacity style={styles.button}
                        onPress={ () => navigation.navigate('Home')}
                        >
                            <Text style={styles.buttonText}>CONFIRMAR</Text>
                        </TouchableOpacity>
                        </Box>
                        
            </Box>
        </NativeBaseProvider>
       
            

        
   
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color: 'black',
        fontSize:20,
        marginTop: 10,
        marginLeft: 10,
    },

    title2:{
        fontWeight: 'bold',
        color: '#408755',
        fontSize:18,
       
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
        justifyContent: 'center',
        marginTop:10,


    },
    buttonText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonStyle: {
        flex: 1,
        paddingLeft:25,
        backgroundColor: '#EDEDED',
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 10,
        width:80,
    },


})