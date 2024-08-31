import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {Image, Text, View} from 'react-native';

const Individual_status = () => {
  return (
    <View
      style={{
        width: '48.5%',
        height: 170,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
      }}>

<View>
      <Image
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
</View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          // paddingVertical: 5,
          paddingHorizontal: 10,
          gap: 5,
        }}>
          <BlurView style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            height: '100%'
          }}
          blurType="light"
          blurAmount={20}
          />
          <Image
            style={{width: 30, height: 30, borderRadius: 100, marginVertical: 5}}
            source={{uri: 'https://picsum.photos/200/320'}}/>
          <Text style={{fontWeight: 600, color: 'white'}}>Hi</Text>
      </View>
    </View>
  );
};

export default Individual_status;
