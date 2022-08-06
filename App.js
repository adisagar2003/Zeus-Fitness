import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  console.log('a');
  return (
    <View style={{backgroundColor:'#1f1f1f'}}>
   <Navbar />
  <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
