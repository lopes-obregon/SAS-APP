import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Touchable, Title, FlatList, Alert } from "react-native";
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import * as Animatable from 'react-native-animatable'
import {useNavigation, useRoute} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons';
import { Calendar, Agenda, CalendarList, AgendaList } from "react-native-calendars";
import api from "../../services/api";


/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}


/*Essa é a segunda página do agendamento */ 
export default function Agendamento2(){
    const navigation = useNavigation();
    //args da rota
    const route = useRoute();
    const { cartão_sus, nome_paciente, user, filhos } = route.params;
    console.log("filhos:",filhos)
    console.log(user);
    //variavel para armazenar a data no formato yyyy-mm-dd
    let data = "";
    //variavel para armazenar horas minutos
    const [hora_minuto, setHoraMinuto] = useState("");
    async function salvarDados(){
        console.log("salvando dados!");
        console.log("antes do if Data:", data);
        console.log(" antes do if Hora:", hora_minuto);
        
        //garantindo de trabalhar com data não vazia
        if (data != "" && hora_minuto != ""){
            console.log("Data:", data);
            console.log("Hora:", hora_minuto);
            let json = {
                "cartão_sus":cartão_sus,
                "nome":nome_paciente,
                "data":data,
                "hora":hora_minuto
            }
            try{
                        await api.post('agendamento', json).then(reslt=>{
                            Alert.alert(reslt.data);
                            navigation.navigate('Home',{ screen:'Início', params: {"user": user} });
                        } );

            }catch(err){
                console.log(err);
            }
        }else{
            Alert.alert("Data e Hora deve ser selecionado!");
        }
    }
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
                                onPress={ () => navigation.navigate('Agendamento', {"user": user})}>
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

                    <Box  marginTop={5} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={380} height={500}>
                        <Box marginTop={5}>
                        <Calendar
                        onDayPress={day => {
                            console.log('selected day', day);
                            data = day.dateString;
                        }}
                        />
                        </Box>

                        <Text style={styles.title} marginBottom={20}>Horários Disponíveis</Text>

                        <Box >
                            
                        <FlatList 
                        data={['7:50','8:35','8:40','10:15','13:00','15:48']}
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
                            onPress={()=>{
                                setHoraMinuto(item);
                            }}
                            
                            >
                                
                                <Text  small>Dom</Text>
                                <Text style={styles.title2} >5</Text>
                                <Text   small>{item}</Text>
                                <Text small>  AM</Text>

                            </TouchableOpacity>
                        )}
                        />
                    
                        </Box>


                        </Box>
                    
                        <Box marginTop={20}>
                        <TouchableOpacity style={styles.button}
                        onPress={salvarDados}
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
        marginLeft: 10,
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