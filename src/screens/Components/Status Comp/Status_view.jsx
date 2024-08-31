import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Individual_status from './Individual_status'

const Status_view = () => {
  return (
    <ScrollView style={{ height: '100%', marginTop: 10, paddingHorizontal: 10, paddingTop: 15, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
        <Text style={{fontSize: 18, fontWeight: 800, marginBottom: 10}}>Status</Text>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
          <Individual_status />
          <Individual_status />
          <Individual_status />
        </View>
    </ScrollView>
  )
}

export default Status_view