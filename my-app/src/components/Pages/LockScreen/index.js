import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export function LockScreen({ navigation }) {
  const nubankLogo = require("../../../../assets/NubankLogo.png");
  return (
    <View style={styles.container}>
      <Image source={nubankLogo} style={styles.image} />
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => navigation.navigate("Initial")}
      >
        <Text style={styles.buttonText}>Usar senha do celular</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5C0098",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 130,
    height: 130,
  },
  joinButton: {
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
    height: 55,
    width: 320,
    marginBottom: 30,
    backgroundColor: "#fff",
  },
  buttonText: {
    fontWeight: "600",
    color: "#000",
    fontSize: 15,
  },
});
