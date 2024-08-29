import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';

const Messages_view = () => {
  return (
  <ScrollView style={{marginTop: 20, paddingHorizontal: 10}}>
      <Text style={{fontSize: 15, fontWeight: 800}}>Chats</Text>

      {/* Individual Message */}
      <View
        style={{
          height: 55,
          marginTop: 10,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}>
        <Pressable style={{height: 50, width: 50}}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 100}}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
        </Pressable>

        <View style={{height: '100%', justifyContent: 'space-evenly'}}>
          <Text>Name</Text>
          <Text style={{fontWeight: 600}}>My Message</Text>
        </View>

        <View style={{marginLeft: 'auto', alignItems: 'center', height: '100%', justifyContent: 'space-evenly'}}>
          <Text>Last Msg Time</Text>
          <Text
            style={{
              width: 18,
              height: 18,
              fontSize: 12,
              fontWeight: 600,
              backgroundColor: '#13A32A',
              color: 'white',
              borderRadius: 100,
              textAlign: 'center',
            }}>
            2
          </Text>
        </View>
      </View>

  </ScrollView>
  );
};

export default Messages_view;
