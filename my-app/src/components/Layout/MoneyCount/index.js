import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export function MoneyCount() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>
      <Text style={styles.amount}>R$ 1,356,98</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "Column",
    width: "100%",
    height: 50,
    color: "#fff",
    paddingHorizontal: 15,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  amount: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
