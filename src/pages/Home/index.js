import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { NativeBaseProvider, Box, HStack, Icon, Heading } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Configuração do gradiente do background
const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};

// Página inicial do usuário
export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();
    const user = route.params?.user;
    const vaiParaProfile = ()=>{
        navigation.navigate('Perfil', {"user":user})
    };
    console.log("Dados do usuário recebidos:", user?.nome);

    return (
        // ScrollView é a barra de rolagem
        <ScrollView>
            <NativeBaseProvider config={config}>
                <Box padding={4} flex={1} flexDirection="column" bg={{
                    linearGradient: {
                        colors: ["#F3F3F3", "green.700"]
                    }
                }}>
                    <HStack w="100%" alignItems="center" justifyContent="space-between" safeArea>
                        <Box rounded="md" flexDir="row" alignItems="center">
                            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                                <Icon
                                    as={Feather}
                                    name="chevron-left"
                                    size={7}
                                    color="#408755"
                                />
                            </TouchableOpacity>
                            <Heading marginLeft={4} size="sm" color="#408755">OLÁ SR(a) {user?.nome}!</Heading>
                        </Box>
                        <Box rounded="md" flexDir="row" alignItems="center">
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <Icon
                                    as={Feather}
                                    name="phone-call"
                                    size={7}
                                    color="#408755"
                                    marginRight={4}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon
                                    as={Feather}
                                    name="bell"
                                    size={7}
                                    color="#408755"
                                    marginRight={4}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon
                                    as={Feather}
                                    name="menu"
                                    size={7}
                                    color="#408755"
                                />
                            </TouchableOpacity>
                        </Box>
                    </HStack>
                    <HStack w="100%" alignItems="center" justifyContent="space-between" safeArea>
                        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                            <Box
                                rounded="md"
                                flexDir="row"
                                padding={5}
                                backgroundColor="#408755"
                                borderRadius={30}
                                height={163}
                                width={380}
                            >
                                <Box marginTop={10}>
                                    <Heading size="sm" color="#FFF">POR QUE SE VACINAR?</Heading>
                                </Box>
                                <Box marginLeft={5} alignItems="center" marginTop={4} backgroundColor="#FFF" borderRadius={30} height={5} width={120}>
                                    <Heading size="sm" color="#408755">LEIA AGORA</Heading>
                                </Box>
                                <Box>
                                    <Image
                                        source={{ uri: 'https://via.placeholder.com/150' }} // Adicione uma imagem real ou um placeholder
                                        style={{ width: 100, height: 100 }}
                                        resizeMode="contain"
                                    />
                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </HStack>
                    <Heading size="md" color="#408755" marginLeft={2}>
                        SERVIÇOS
                    </Heading>
                    <HStack w="100%" alignItems="center" justifyContent="space-between" safeArea>
                        <Box backgroundColor="#89BF9E" rounded="md" flexDir="row" padding={3} height={20} width={390}>
                            <TouchableOpacity onPress={() => navigation.navigate('Agendamento', {"user": user})}>
                                <Icon
                                    as={Feather}
                                    name="calendar"
                                    size={10}
                                    color="#408755"
                                    marginRight={12}
                                />
                                <Heading fontSize='12px'>Agendamento</Heading>
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
                                <Heading fontSize='12px'>Exames</Heading>
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
                                <Heading fontSize='12px'>Medicações</Heading>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon
                                    as={Feather}
                                    name="list"
                                    size={10}
                                    color="#408755"
                                    marginLeft={5}
                                />
                                <Heading fontSize='12px'>Outros</Heading>
                            </TouchableOpacity>
                        </Box>
                    </HStack>
                    <Heading size="md" color="#408755" marginLeft={2}>
                        Informações sobre a COVID-19
                    </Heading>
                    <TouchableOpacity onPress={() => navigation.navigate('Covid')}>
                        <Box alignSelf="center" marginTop={0} width={389} height={340} backgroundColor="#ECECEC" borderRadius={30} marginBottom={20}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/300x200' }} // Adicione uma imagem real ou um placeholder
                                style={{ width: '100%', height: 200 }}
                                resizeMode="contain"
                            />
                            <Box alignItems="center" marginLeft={130} backgroundColor="#409755" borderRadius={30} height={5} width={120}>
                                <Heading size="sm" color="#FFFFFF">VEJA AGORA</Heading>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </NativeBaseProvider>
        </ScrollView>
    );
}
