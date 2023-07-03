import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert} from 'react-native';

export default function App() {
  const textInConsole = () => Alert.alert("Look at you","You are beauty", [
    {text:"Yeeeeeep"},
    {text:"Why?"}
  ])
  const textAfterPressButton = () => Alert.alert('МОЛОДЦОМ!')
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={textInConsole}>Kristina {'\n'}the best of the best </Text>
      <Button title={'Ну кликни на меня'} color='black' onPress={textAfterPressButton} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
});
