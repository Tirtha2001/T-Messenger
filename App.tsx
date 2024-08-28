import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Tab' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});
