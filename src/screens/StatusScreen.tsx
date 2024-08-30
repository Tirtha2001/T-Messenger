import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header_bar from './Components/Header_bar';
import Status_view from './Components/Status Comp/Status_view';


interface StatusScreenProps {}

const StatusScreen = (props: StatusScreenProps) => {
  return (
    <View style={styles.container}>
      <Header_bar />
      <Status_view />
      {/* <MaterialIcons name="home" size={30} color="#000" /> */}
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {}
});
