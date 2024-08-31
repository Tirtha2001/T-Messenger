import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Individual_status from './Individual_status'

const Status_view = () => {
  return (
    <ScrollView style={{ height: '100%', marginTop: 10, paddingHorizontal: 10, paddingTop: 15, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
        <Text style={{fontSize: 18, fontWeight: 800, marginBottom: 10}}>Status</Text>
        <Individual_status />
    </ScrollView>
  )
}

export default Status_view