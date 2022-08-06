import { View, Text ,Image,TouchableHighlight} from 'react-native'
import React from 'react'
import icon from '../assets/jogginv.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import dumbell from '../assets/dumbell.png'
import { TouchableOpacity } from 'react-native-web';

export default function Excercise(props) {
  return (

    <View style={{padding:30,display:'flex',justifyContent:'space-around',height:1000,flexGap:30}}>
      <TouchableHighlight>
    <View style={{backgroundColor:'#2b2b2b',height:180,width:500,borderRadius:8,display:'flex',flexDirection:'row',padding:20}}>
<View style={{backgroundColor:'#181a19',borderRadius:500,marginLeft:50}}><Image source={props.icon} style={{ width: 150, height: 90,marginTop:20,borderRadius:40}} /></View>
    <View style={{padding:40}}>
  <Text style={{fontSize:20,color:'white',fontWeight:'900'}}>{props.heading}</Text>
  <View style={{display:'flex',flexDirection:'row'}}>
  <Text style={{fontSize:10,color:'white',fontWeight:'900',padding:10,fontSize:20}}>
    <Icon name="fire" color='red' style={{fontSize:20}} />
    <Text style={{marginLeft:10}}>{props.calories}</Text>
  </Text>
  <Text style={{fontSize:10,color:'white',fontWeight:'900',padding:10,fontSize:20}}>
    <Icon name="thumbs-up" color='lightgreen' style={{fontSize:20}}  />
    <Text style={{marginLeft:10}}>{props.likes}</Text>
  </Text>
  <Text style={{fontSize:10,color:'white',fontWeight:'900',padding:10,fontSize:20}}>
    <Icon name="clock-o" color='cyan' style={{fontSize:20}} />
    <Text style={{marginLeft:10}}>{props.time}</Text>
  </Text>
  </View>
    </View>
    </View>
    </TouchableHighlight>
  
        </View>
  )
}