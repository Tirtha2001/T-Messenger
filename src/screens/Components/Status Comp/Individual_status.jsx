import React from 'react';
import {Image, Text, View} from 'react-native';

const Individual_status = () => {
  return (
    <View
      style={{
        width: '50%',
        height: 170,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
      }}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 10,
          gap: 5,
        }}
        
        >
        <Image
          style={{width: 30, height: 30, borderRadius: 100}}
          source={{uri: 'https://picsum.photos/200/320'}}
        />
        <Text style={{fontWeight: 600, color: 'white'}}>Hi</Text>
      </View>

      <Image
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
    </View>
  );
};

export default Individual_status;
