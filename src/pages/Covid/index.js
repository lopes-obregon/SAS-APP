import React, { useState } from 'react';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image , ScrollView, Linking} from "react-native";
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'
import {Icon, NativeBaseProvider, Heading, Box, Center} from 'native-base';
import { Feather } from '@expo/vector-icons';


/*Aqui é a configuração do gradiente do background*/
const config = {
    dependencies:{
        'linear-gradient': LinearGradient
    }
}

  const data = [
    { label: 'MS', value: '1' },
    { label: 'SP', value: '2' },
    { label: 'RJ', value: '3' },
    
  ];

  const Covid = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation();
    
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Selecione sua região
          </Text>
        );
      }
      return null;
    };

    return (

        <NativeBaseProvider config={config}>
        <Box padding={4} flex={1} flexDirection="column" bg={{
            linearGradient: {
                colors:["#F3F3F3","green.400"]
            }
            /* Configurações do Gradiente */
            
        }}>
            {/* Seta de voltar*/}
            <Box rounded="md" flexDir="row" alignItems="center" marginBottom={10}>
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
                color="#408755">Informações Covid-19</Heading>
                                        
            </Box>
            <Image marginLeft={10} marginBottom={10} source={require("../../assets/covid.png")}>

                        </Image>

      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Selecione sua região' : '...'}
          searchPlaceholder="Pesquise..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <Box marginTop={10}>
                        <TouchableOpacity style={styles.button}
                        onPress={linkExternal1}
                        >
                            <Text style={styles.buttonText}>CONFIRMAR</Text>
                        </TouchableOpacity>
                        </Box>
      </Box>


      </NativeBaseProvider>
    );
  };

  export default Covid;


  function linkExternal1(){
    Linking.openURL('https://brasil.io/covid19/MS/');
  }

  const linkExt1 = (() => {
    Linking.openURL('https://brasil.io/covid19/MS/');
  })

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
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
  });