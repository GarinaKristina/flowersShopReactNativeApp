import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import flowersCatalog from "../assets/magazin-cvetov.png";

export default function CatalogPage() {
  // const loadScene = () => {
  //   navigation.navigate("");
  // };
  return (
    <View style={styles.container}>
      <Text>Catalog</Text>
      <TouchableOpacity style={styles.rosesButtonStyle}>
        <Text style={styles.buttonText}>Roses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tulipsButtonStyle}>
        <Text style={styles.buttonText}>Tulips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chrysanthemumButtonStyle}>
        <Text style={styles.buttonText}>Chrysanthemum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.narcissusButtonStyle}>
        <Text style={styles.buttonText}>Narcissus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.сhamomileButtonStyle}>
        <Text style={styles.buttonText}>Сhamomile</Text>
      </TouchableOpacity>

      {/* // onPress={loadScene} */}
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
  rosesButtonStyle: {
    backgroundColor: "indianred",
    width: 350,
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
  tulipsButtonStyle: {
    backgroundColor: "indianred",
    width: 350,
    height: 30,
    position: "absolute",
    top: 90,
    left: 20,
    right: 100,
    borderRadius: 40,
    elevation: 2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chrysanthemumButtonStyle: {
    backgroundColor: "indianred",
    width: 350,
    height: 30,
    position: "absolute",
    top: 130,
    left: 20,
    right: 100,
    borderRadius: 40,
    elevation: 2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  narcissusButtonStyle: {
    backgroundColor: "indianred",
    width: 350,
    height: 30,
    position: "absolute",
    top: 170,
    left: 20,
    right: 100,
    borderRadius: 40,
    elevation: 2,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  сhamomileButtonStyle: {
    backgroundColor: "indianred",
    width: 350,
    height: 30,
    position: "absolute",
    top: 210,
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
