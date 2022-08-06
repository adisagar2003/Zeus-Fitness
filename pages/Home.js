import React, { Component, useState } from 'react'
import { Text, View,StyleSheet,Animated,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import icon from '../assets/icon.png'
import cycling from '../assets/cycle.png'
import Excercise from '../components/Excercise';
import dumbell from '../assets/dumbell.png';
import running from '../assets/running.png';
import running2 from '../assets/running2.png'
export default class Home extends Component {

  render() {
   
    return (
      <View style={{padding:30,display:'flex',justifyContent:'space-around',height:1000,flexGap:30}}>
      
  <Excercise heading="Running" icon={running2} calories="300" likes="450" time="15 min"  />
  <Excercise heading="Cycling"  icon={cycling} calories="300" likes="450" time="15 min" />
  <Excercise heading="Lifting" icon={dumbell} calories="300" likes="450" time="15 min" />
      </View>
    )
  }

}

const style = StyleSheet.create({
    progressBar: {
        width: '50%',
        height: 20,
        marginLeft:25,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 8,
        borderColor: '#555',
        flexDirection:"row"
      } 
})
