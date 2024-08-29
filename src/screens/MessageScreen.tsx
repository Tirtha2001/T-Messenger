import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Header_bar from './Components/Header_bar'
import Messages_view from './Components/Message Comp/Messages_view'

interface MessageScreenProps {}

const MessageScreen = (props: MessageScreenProps) => {
  return (
    <View style={styles.container}>
      <Header_bar />
      <Messages_view />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25DC42'
  }
});
