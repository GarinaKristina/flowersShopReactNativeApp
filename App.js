import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, Image, TouchableOpacity} from 'react-native';

export default function App() {

  const textAfterPressButton = () => Alert.prompt('Here we go.....')
  return (
    <View style={styles.container}>
       <Text numberOfLines={4}  style={styles.text} >Welcome {"\n"}You are in the Flower Shop {"\n"}If you want to know our range {"\n"}Tap on the Catalog </Text>

      <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Catalog</Text>
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
    color: 'white',
    position: 'absolute',
    zIndex: 2,
    top: 150, //отступ в пикселях сверху
    fontSize: 25, // размер шрифта
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 30, // отступы между строками текста
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  mainPicture: {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  },
  buttonStyle:{
    backgroundColor: "indianred",
    width: 200,
    height: 60,
    position: 'absolute',
    top: 350,
    left: 100,
    right: 100,
    borderRadius: 40,
    elevation: 2,  
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
