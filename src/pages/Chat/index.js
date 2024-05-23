import React, {Fragment, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Balloon from '../Balloon';

const KEYBOARD_AVOIDING_BEHAVIOR = Platform.select({
  ios: 'padding',
  android: 'height',
});

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 10,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 5,
    
  },
  messageTextInputContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: 'transparent',
    borderTopColor: Colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom:80,
  },
  messageTextInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 90,
    paddingHorizontal: 12,
    fontSize: 17,
    paddingTop: 8,
    marginHorizontal: 5,
    borderColor: Colors.light,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
});

const chats = [
    {
      id: 1,
      users: [
        {
          id: 32,
          phone: '+5511999882323',
        },
        {
          id: 99,
          phone: '+5521991234321',
        },
      ],
      messages: [
        {
          id: '-MLjvqRCEhOCF2MAFjng',
          content: 'Oi, tudo bem?',
          sent: '2020-11-09T22:16:40-04:00',
          sentBy: 99,
        },
        {
          id: '-MLjvqRCEhOCF2MAFjng',
          content: 'Tudo sim e contigo?',
          sent: '2020-11-09T22:16:40-04:00',
          sentBy: 32,
        },
      ],
    },
    {
      id: 2,
      users: [
        {
          id: 32,
          phone: '+5511999882323',
        },
        {
          id: 99,
          phone: '+5532988882222',
        },
      ],
      messages: [
        {
          id: '-MLjvqRCEhOCF2MAFjng',
          content: 'E aquele conteúdo sobre como criar um chat?',
          sent: '2020-11-09T22:16:40-04:00',
          sentBy: '+5511999990000',
        },
      ],
    },
  ];



  const Chat = () => {
  const [message, setMessage] = useState('');
  const currentUser = { id: 1, name: 'Current User' };
  const initialMessages = [
    { id: 1, senderId: 2 },
    { id: 2, text: 'Hi there!', senderId: 1 },
    { id: 3, text: 'How are you?', senderId: 2 },
  ];
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        senderId: currentUser.id,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {messages.map((msg) => (
          <Balloon key={msg.id} message={msg} currentUser={currentUser} />
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_BEHAVIOR}
        keyboardVerticalOffset={76}
      >
        <SafeAreaView>
          <View style={styles.messageTextInputContainer}>
            <TextInput
              style={styles.messageTextInput}
              placeholder="Digite sua mensagem..."
              placeholderTextColor="#A9A9A9"
              multiline
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity
              style={styles.sendButton}
              disabled={!message.trim()}
              onPress={sendMessage}
            >
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default Chat;