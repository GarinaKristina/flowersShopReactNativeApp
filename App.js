import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, Image, TouchableOpacity} from 'react-native';

export default function App() {

  const textAfterPressButton = () => Alert.prompt('Here we go.....')
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
      <Image style={styles.mainPicture} source={require('./assets/flowers.png')} />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  },
  mainPicture: {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  },
  buttonStyle:{
    backgroundColor: "black",
    padding: 100,
    position: 'absolute',
    top: 300,
    left: 'center',
    borderRadius: 40,
    elevation: 2,  
    zIndex: 1
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
