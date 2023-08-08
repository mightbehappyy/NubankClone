import { StatusBar } from "expo-status-bar";
import { CurrencyEth } from "phosphor-react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export function Options({ iconImage, iconName }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.optionsCircle}>
          {iconImage}
        </TouchableOpacity>
      </View>
      <Text style={{ color: "white", marginTop: 10 }}>{iconName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 70,
  },
  optionsCircle: {
    width: 70,
    height: 70,
    borderRadius: 80 / 2,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsCircleImage: {
    width: "95%",
    height: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80 / 2,
  },
});
