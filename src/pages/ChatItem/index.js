import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatItem = ({ chat, currentUser }) => {
  const { users, messages } = chat;
  const otherUser = users.find(user => user.id !== currentUser);
  const lastMessage = messages[messages.length - 1];

  return (
    <View style={styles.container}>
      <Text style={styles.userPhone}>{otherUser.phone}</Text>
      <Text style={styles.lastMessage}>{lastMessage.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userPhone: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default ChatItem;
