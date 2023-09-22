import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

import flowers from "../assets/magazin-cvetov.png";

export default function CatalogPage() {
  return (
    <View style={styles.container}>
      <Image source={flowers} style={styles.mainPicture} />
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
});
