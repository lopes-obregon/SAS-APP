import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import UserDefaultImage from '../../assets/profile-pic.png';

const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  userPairImage: {
    width: 38,
    height: 38,
    marginRight: 12,
  },
  userPairPhone: {
    fontWeight: '500',
    marginBottom: 6,
  },
  chatLastMessage: {
    fontWeight: '300',
    color: '#999',
  },
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

const ChatItem = ({chat, currentUser}) => {
  const [userPair] = chat.users.filter((u) => u.id !== currentUser);
  return (
    <View key={chat.id} style={styles.chatItemContainer}>
      <Image source={UserDefaultImage} style={styles.userPairImage} />
      <View>
        <Text style={styles.userPairPhone}>{userPair.phone}</Text>
        <Text style={styles.chatLastMessage}>
          {chat.messages[chat.messages.length - 1]?.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatItem;