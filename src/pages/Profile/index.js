import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


/*Essa é a página de perfil do usuário */ 
export default function Profile(){
    const navigation = useNavigation();

    return(

            
    <Text>Página de Agendamento2</Text>
        
   
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color: '#408755',
        fontSize:20,
        marginTop: 30,
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    }

})