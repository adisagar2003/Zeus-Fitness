import { View, Text,Link,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {

  return (
    <SafeAreaView style={styles.navbar}>
    <Icon name="fire" size={30} color="orange" />
    <TouchableOpacity><Text style={{color:'white',fontSize:20,textDecorationLine:'underline'}}>Progress</Text></TouchableOpacity>
    <TouchableOpacity><Text style={{color:'white',fontSize:20}}>Year</Text></TouchableOpacity>
    <TouchableOpacity><Icon name='cube' style={{color:'white',fontSize:20}} /></TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbar:{
      backgroundColor:'#1f1f1f',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:50,
    
    

    }

  });
  