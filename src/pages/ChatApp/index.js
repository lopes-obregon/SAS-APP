import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { io } from 'socket.io-client';

const URL_SERVIDOR = 'http://192.168.3.4:3000';
const socket = io(URL_SERVIDOR);

function ChatApp(props) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [contato_id, setContatoId] = useState(0);
  const usuario_atual = props?.user?.nome;
  
  const contacts = [
    { id: 1, name: 'Médico John' },
    { id: 2, name: 'Médica Alice' },
    { id: 3, name: 'ACS Bob' },
  ];

  useEffect(() => {
    socket.on('chat message', (msg) => {
      console.log('Nova mensagem recebida:', msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleContactClick = (contactId) => {
    setSelectedContact(contactId);
    setContatoId(contactId);
    setMessages([]); // Limpar as mensagens ao selecionar um novo contato
  };

  const handleBackToContacts = () => {
    setSelectedContact(null);
    setMessages([]); // Limpar as mensagens ao voltar para a lista de contatos
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const msg = {
        chatId: contato_id,
        content: inputMessage,
        sender: usuario_atual,
      };
      socket.emit('chat message', msg); // Emitir mensagem com o evento 'chat message'
      setMessages((prevMessages) => [...prevMessages, msg]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.header}>Contatos</Text>
        <ScrollView>
          {contacts.map((contact) => (
            <TouchableOpacity key={contact.id} style={styles.sidebarItem} onPress={() => handleContactClick(contact.id)}>
              <Text>{contact.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.chat}>
        {selectedContact ? (
          <>
            <TouchableOpacity style={styles.header} onPress={handleBackToContacts}>
              <Text style={styles.headerButton}>Voltar</Text>
            </TouchableOpacity>

            <View flexDirection="row">
              <Image source={require("../../assets/profile-pic.png")} style={styles.image} resizeMode="center"></Image>
              <Text style={styles.chatHeader}>Médico(a) {selectedContact}</Text>
            </View>

            <ScrollView style={styles.messages}>
              {messages.map((message, index) => (
                <View key={index} style={message.sender === usuario_atual ? styles.userMessage : styles.otherMessage}>
                  <Text>{message.content}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.input}>
              <TextInput
                style={styles.inputField}
                placeholder="Escreva sua mensagem..."
                value={inputMessage}
                onChangeText={(text) => setInputMessage(text)}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Text style={styles.sendButtonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.noChatSelected}>Selecione um contato para conversar!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 120,
    borderRightWidth: 1,
    borderRightColor: '#408755',
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#408755",
    marginBottom: 10,
  },
  sidebarItem: {
    paddingVertical: 5,
  },
  chat: {
    flex: 1,
    padding: 10,
  },
  headerButton: {
    backgroundColor: '#408755',
    color: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  chatHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  messages: {
    maxHeight: 200,
    marginBottom: 20,
  },
  userMessage: {
    backgroundColor: '#408755',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#408755',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#408755',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sendButtonText: {
    color: 'white',
  },
  noChatSelected: {
    fontSize: 18,
    textAlign: 'center',
  },
  profileImage: {
    marginTop: 18,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default ChatApp;
