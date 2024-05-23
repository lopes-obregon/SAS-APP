// Balloon.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Balloon = ({ message, isCurrentUser }) => {
  return (
    <View style={[styles.balloon, isCurrentUser ? styles.currentUser : styles.otherUser]}>
      <Text>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balloon: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  currentUser: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherUser: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
});

export default Balloon;
