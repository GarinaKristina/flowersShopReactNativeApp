import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import flowersCatalog from "../assets/magazin-cvetov.png";

export default function CatalogPage() {
  const loadScene = () => {
    navigation.navigate("");
  };
  return (
    <View style={styles.container}>
      <Text>Catalog</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={loadScene}>
        <Text style={styles.buttonText}>Roses</Text>
      </TouchableOpacity>
      <Image source={flowersCatalog} style={styles.mainPicture} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPicture: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonStyle: {
    backgroundColor: "indianred",
    width: 70,
    height: 30,
    position: "absolute",
    top: 50,
    left: 20,
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
    fontSize: 25,
    fontWeight: "italic",
  },
});
