import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ContactScreenProps {}

const ContactScreen = (props: ContactScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {}
});
