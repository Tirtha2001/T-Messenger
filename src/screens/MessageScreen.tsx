import * as React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Header_bar from './Components/Header_bar'
import Messages_view from './Components/Message Comp/Messages_view'
import useFirestoreRealTimeDocument from '../api/useFirestoreRealTimeQuery';

interface MessageScreenProps {}

const MessageScreen = (props: MessageScreenProps) => {

  const {data, isLoading, error} = useFirestoreRealTimeDocument('COLLECTION_ID', 'DOCUMENT_ID')

  
  console.log(data)
  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  if (!data) return <Text>No data found for this document</Text>;


  return (
    <View style={styles.container}>
      <Header_bar />
      {Object.entries(data)?.map(data=>(
        <>
        {console.log(Object.entries(data[1]))}
        {/* <Text>{data[1].userInfo.displayName}</Text> */}
      <Messages_view />
        </>
      ))}
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#25DC42'
  }
});
