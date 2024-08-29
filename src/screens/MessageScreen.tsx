import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Header_bar from './Components/Header_bar'

interface MessageScreenProps {}

const MessageScreen = (props: MessageScreenProps) => {
  return (
    <View style={styles.container}>
      <Header_bar />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {}
});
