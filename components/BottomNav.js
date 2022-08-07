import { View, Text ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import home from '../assets/home.jpg'

export default function BottomNav() {
  return (
    <View style={{position:'absolute',bottom:0,height:100,width:600,backgroundColor:'#4f4f4f',padding:30,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity><Icon name="home" style={{fontSize:30,color:'white',padding:5,backgroundColor:'#1f1f1f',borderRadius:30}} /></TouchableOpacity>
  <TouchableOpacity><Icon name="clock-o" style={{fontSize:30,color:'white',padding:5,backgroundColor:'#1f1f1f',borderRadius:30}} /></TouchableOpacity>
  <TouchableOpacity><Icon name="clock-o" style={{fontSize:30,color:'white',padding:5,backgroundColor:'#1f1f1f',borderRadius:30}} /></TouchableOpacity>

    </View>
  )
}