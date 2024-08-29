import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


interface StatusScreenProps {}

const StatusScreen = (props: StatusScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>StatusScreen</Text>
      <MaterialIcons name="home" size={30} color="#000" />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {}
});
