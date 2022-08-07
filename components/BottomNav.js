import { View, Text } from 'react-native'
import React from 'react'

export default function BottomNav() {
  return (
    <View style={{position:'absolute',bottom:0,height:100,width:600,backgroundColor:'#4f4f4f',display:'flex',}}>
      <Text>BottomNav</Text>
    </View>
  )
}