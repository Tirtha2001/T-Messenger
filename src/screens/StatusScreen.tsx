import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface StatusScreenProps {}

const StatusScreen = (props: StatusScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>StatusScreen</Text>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {}
});
