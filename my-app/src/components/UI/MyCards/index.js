import { StatusBar } from "expo-status-bar";
import { CreditCard } from "phosphor-react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export function MyCards() {
  return (
    <TouchableOpacity style={styles.container}>
      <CreditCard color="white" size={24} style={{ marginHorizontal: 5 }} />
      <Text
        style={{
          color: "#fff",
          fontSize: 15,
          fontWeight: "600",
          marginLeft: 15,
        }}
      >
        Meus Cartões
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: 70,
    paddingHorizontal: 15,
    backgroundColor: "#222",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
});
