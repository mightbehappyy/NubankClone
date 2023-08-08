import { StatusBar } from "expo-status-bar";
import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export function MoneyCount() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <View style={styles.startItem}>
          <Text style={styles.title}>Conta</Text>
        </View>
        <View style={styles.endItem}>
          <CaretRight color="white" size={20} />
        </View>
      </View>
      <Text style={styles.title}>R$ 0,00</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    height: "auto",
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
  },
  amount: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
  },
  warning: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  startItem: {
    flex: 1,
  },
  endItem: {
    justifyContent: "flex-end",
  },
});
