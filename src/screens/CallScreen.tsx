import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CallScreenProps {}

const CallScreen = (props: CallScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CallScreen</Text>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {}
});
