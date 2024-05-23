import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    // Função para realizar o login
    async function login() {
        if (!email || !senha) {
            Alert.alert("Por favor, preencha todos os campos.");
            return;
        }

        const json = {
            "usuario": email,
            "senha": senha
        };

        setLoading(true);
        const login_valido = await lerDados(json);
        setLoading(false);

        if (login_valido) {
            console.log("Login válido!");
            try {
                let resultado_servidor = await api.put('users', json);
                console.log("Resultado do servidor:", resultado_servidor.data)
                navigation.navigate('Home', { "user": resultado_servidor.data});
            } catch (error) {
                console.log("Erro ao buscar dados do usuário:", error);
                Alert.alert("Erro ao buscar dados do usuário.");
            }
        } else {
            Alert.alert("Login ou senha inválidos!");
        }
    }

    async function lerDados(dado) {
        try {
            const response = await api.post('session', dado);
            return response.data === true;
        } catch (error) {
            console.log("Algo deu errado:", error);
            Alert.alert("Erro ao realizar login. Tente novamente mais tarde.");
            return false;
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Entre com sua conta</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Image
                    source={require('../../assets/teste.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail..."
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={login} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFF" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#408755',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '10%',
        paddingEnd: '10%',
    },
    title: {
        fontWeight: 'bold',
        color: '#408755',
        fontSize: 20,
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#408755',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#408755',
    },
});
