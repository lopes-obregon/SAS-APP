import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome(){
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/welcome.png')}
                    style= {{width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>O seu atendimento médico no conforto da sua casa</Text>
                

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>


        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    containerLogo:{
        
        backgroundColor:"#408755"
    },
})