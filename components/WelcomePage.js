import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import flowers from "../assets/flowers.png";

export default function WelcomePage({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Catalog");
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.welcomeText}>
        Welcome
      </Text>
      <Text numberOfLines={3} style={styles.text}>
        You are in the Flower Shop {"\n"}if you want to know our range {"\n"}tap
        on the Catalog{" "}
      </Text>
      <Text numberOfLines={2} style={styles.locationText}>
        {" "}
        Our location: The Republic of Love,{"\n"}the street of impressions,14
      </Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={loadScene}>
        <Text style={styles.buttonText}>Catalog</Text>
      </TouchableOpacity>
      <Image source={flowers} style={styles.mainPicture} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    position: "absolute",
    zIndex: 2,
    top: 200,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 30,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  welcomeText: {
    color: "white",
    position: "absolute",
    zIndex: 2,
    top: 155,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 30,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  locationText: {
    color: "white",
    position: "absolute",
    zIndex: 2,
    top: 750,
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 15,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  mainPicture: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    resizeMode: "cover",
  },
  buttonStyle: {
    backgroundColor: "indianred",
    width: 200,
    height: 60,
    position: "absolute",
    top: 350,
    left: 100,
    right: 100,
    borderRadius: 40,
    elevation: 2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
