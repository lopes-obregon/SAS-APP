import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { Icon, NativeBaseProvider, Heading, Box } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Calendar } from "react-native-calendars";
import api from "../../services/api";

//variavel global
var json_datas = undefined;
var is_executou = false;
//data atual
let data_atual = new Date();
const config = {
    dependencies: {
        'linear-gradient': LinearGradient
        }
};

async function consultarDatas(){
    let dia = "";
    let mes = "";
    if(data_atual.getDate() <10){
        dia = `0${data_atual.getDate()}`;
    }else {
        dia = data_atual.getDate().toString();
    }
    if(data_atual.getMonth() < 10){
        mes = `0${data_atual.getMonth()}`;
    }else{
        mes = data_atual.getMonth().toString();
    }
    try {
        let str_data = data_atual.getFullYear().toString() +"-"+mes+"-"+dia;
        console.log(str_data); 
        let json = {data:str_data}
        console.log("Consultado dadas!");
        let result = (await api.put("agendamento", json)).data
        json_datas = result;
        console.log(json_datas);
        is_executou = true;
        } catch (error) {
            console.log(error)
        }
        
}

//cahamada de função
export default function Agendamento2() {
    if(!is_executou){
        console.log(is_executou);
        consultarDatas();

    }
    const route = useRoute();
    const navigation = useNavigation();
    const [data, setData] = useState('');
    const { user, filhos } = route.params;
    console.log("rota", route.params);
    const [hora_minuto, setHoraMinuto] = useState("");
    const [hora, setHora] = useState([]);
    function comparaDatas(data_selecionada_str=""){
        console.log("Data selecionada str:", data_selecionada_str);
        let data_selecionada_array = data_selecionada_str.split("-");
        let ano_int = parseInt(data_selecionada_array[0]);
        let mes_int = parseInt(data_selecionada_array[1]);
        let dia_int = parseInt(data_selecionada_array[2]);
        let data_selecionada = new Date(ano_int, mes_int, dia_int);
        let array_horas = [];
        let tem_valor = 0;
        console.log(data_selecionada_array);
        console.log("Data selecionada:", data_selecionada);
       // console.log(json_datas);
        console.log("Data atual:", data_atual);
        if(json_datas != undefined){
            json_datas?.datas.forEach(element =>{
                let data_elemento_str = element?.data;
                let data_elemento_array = data_elemento_str.split("-");
                ano_int = parseInt(data_elemento_array[0]);
                mes_int = parseInt(data_elemento_array[1]);
                dia_int = parseInt(data_elemento_array[2]);
                console.log("Data elemento:", element);
                let data_element = new Date(ano_int, mes_int, dia_int);
                if((data_selecionada.getDate() == data_element.getDate()) && (data_selecionada.getMonth() == data_element.getMonth())){
                    console.log("Hora:", element?.hora);
                    //setHora(anterior =>[...anterior, element?.hora]);
                    array_horas.push(element?.hora);
                    tem_valor +=1;
                }
            });
        }else{
            Alert.alert("Consulta", "Desculpe mas estamos consultado o banco de dados!");
        }
        if(tem_valor > 0){
            setHora(array_horas);
        }else{
            setHora([]);
        }
        console.log("COMPARAR");
        console.log(hora);
    }
    
    async function salvarDados() {
        if (data !== "" && hora_minuto !== "") {
            let json = {
                "cartão_sus": user?.cadastro_sus,
                "nome": user?.nome,
                "data": data,
                "hora": hora_minuto,
                "filhos": filhos
            };
            console.log("objeto final:", json);
            try {
                await api.post('agendamento', json).then(reslt => {
                    Alert.alert(reslt.data);
                    navigation.navigate('Home', { screen: 'Início', params: { "user": user } });
                });
            } catch (err) {
                console.log(err);
                Alert.alert("Erro ao salvar os dados. Tente novamente.");
            }
        } else {
            Alert.alert("Data e Hora devem ser selecionados!");
        }
    }

   

    return (
        <NativeBaseProvider config={config}>
            <Box padding={4} flex={1} flexDirection="column" bg={{
                linearGradient: {
                    colors: ["#F3F3F3", "green.400"]
                }
            }}>
                <Box rounded="md" flexDir="row" alignItems="center">
                    <TouchableOpacity onPress={() => navigation.navigate('Agendamento', { "user": user })}>
                        <Icon as={Feather} name="chevron-left" size={7} color="#408755" />
                    </TouchableOpacity>
                    <Heading marginLeft={4} size="lg" color="#408755">Pré Agendamento</Heading>
                </Box>
                <Box marginTop={5} align="center" backgroundColor="#FFFFFF" borderRadius={30} width={380} height={500}>
                    <Box marginTop={5}>
                        <Calendar
                            onDayPress={day => {
                                let selectedDate = new Date(day.dateString);
                                if (selectedDate >= data_atual) {
                                    setData(day.dateString);
                                   comparaDatas(data);
                                    
                                } else {
                                    Alert.alert("Data deve ser igual ou superior á data atual!");
                                    setData("");
                                    
                                }
                            }}
                        />
                    </Box>
                    <Text style={styles.title} marginBottom={20}>Horários Disponíveis</Text>
                    <Box>
                            <FlatList
                                data={hora}
                                horizontal
                                contentContainerStyle={{ paddingLeft: 10 }}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.buttonStyle}
                                        onPress={() => setHoraMinuto(item)}>
                                        <Text style={styles.title2}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        
                    </Box>
                </Box>
                <Box marginTop={20}>
                    <TouchableOpacity style={styles.button} onPress={salvarDados}>
                        <Text style={styles.buttonText}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    title2: {
        fontWeight: 'bold',
        color: '#408755',
        fontSize: 18,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#408755',
        borderRadius: 50,
        paddingVertical: 5,
        width: '80%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#EDEDED',
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 10,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
