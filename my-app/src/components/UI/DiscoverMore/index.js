import { StatusBar } from "expo-status-bar";
import { CaretRight, DeviceMobileSpeaker, Heart } from "phosphor-react-native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
export function DiscoverMore({ iconImage, title, description, buttonText }) {
  return (
    <View style={styles.container}>
      <Image source={iconImage} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.knowMore}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    width: 237,
    height: 240,
    marginVertical: 30,
    marginHorizontal: 15,
    backgroundColor: "#222",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "45%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    margin: 10,
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontWeight: "600",
    color: "#999696",
    marginBottom: 5,
    fontSize: 13,
    textAlign: "left",
    margin: 10,
    marginBottom: 10,
  },
  knowMore: {
    width: 85,
    height: 40,
    backgroundColor: "#5C0098",
    borderRadius: 35,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 13,
    width: 65,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
});
