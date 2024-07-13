import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ChatItem from '../ChatItem';
import io from 'socket.io-client';

const currentUser = 32;
const serverUrl = 'http://192.168.3.4:3000'; // Altere para o URL do seu servidor Socket.IO

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 32,
  },
});

const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const socket = io(serverUrl);
    //verificar connectado no servidor
    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.IO');
    });
    // Evento para lidar com mensagens recebidas do servidor
    socket.on('chat message', (msg) => {
      console.log('Nova mensagem recebida:', msg);
      // Atualizar a lista de chats com a nova mensagem
      const updatedChats = chats.map((chat) => {
        if (chat.id === msg.chatId) {
          return {
            ...chat,
            messages: [...chat.messages, msg],
          };
        }
        return chat;
      });
      setChats(updatedChats);
    });

    // Limpeza: desconectar o socket quando o componente for desmontado
    return () => {
      socket.disconnect();
    };
  }, [chats]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} currentUser={currentUser} />
      ))}
    </SafeAreaView>
  );
};

export default Chats;
