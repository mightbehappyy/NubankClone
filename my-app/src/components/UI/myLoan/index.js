import { StatusBar } from "expo-status-bar";
import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export function MyLoan() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <View style={styles.startItem}>
          <Text style={styles.title}>Emprestimo</Text>
        </View>
        <View style={styles.endItem}>
          <CaretRight color="white" size={20} />
        </View>
      </View>
      <Text style={styles.subtitle}>Valor disponível de até</Text>
      <Text style={styles.subtitle}>R$ 25.0000,00</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
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
    justifyContent: "center",
  },
});
