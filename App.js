import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert} from 'react-native';

export default function App() {
  // const textInConsole = () => Alert.alert("Look at you","You are beauty", [
  //   {text:"Yeeeeeep"},
  //   {text:"Why?"}
  // ])
  const textAfterPressButton = () => Alert.prompt('Here we go.....')
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text} >Welcome!!! </Text>
      <Text numberOfLines={1} style={styles.text} >You are in a flower shop </Text>
      <Text numberOfLines={1} style={styles.text} >If you want to know our range </Text>
      
      <Button title={'Click on me'} color='black' onPress={textAfterPressButton} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'black'
  },
});
