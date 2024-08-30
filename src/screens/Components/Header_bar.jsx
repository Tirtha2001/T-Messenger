import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header_bar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <Pressable style={{height: 50, width: 50}}>
        <Image
          style={{height: '100%', width: '100%', borderRadius: 100}}
          source={{uri: 'https://picsum.photos/200'}}
        />
      </Pressable>
      <Text style={{fontSize: 18}}>T Messanger</Text>
      <View style={{flexDirection: 'row', gap: 10 }}>
            <Pressable>
              <MaterialIcons name="search" size={22} color="#000" />
            </Pressable>
            <Pressable>
              <MaterialIcons name="notifications-none" size={22} color="#000" />
            </Pressable>
      </View>
    </View>
  );
};

export default Header_bar;
