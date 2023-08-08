import { StatusBar } from "expo-status-bar";
import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export function MyDebt() {
  return (
    <TouchableOpacity style={styles.container}>
      <StatusBar backgroundColor="##5C0098" barStyle="light-content" />
      <View style={styles.row}>
        <View style={styles.startItem}>
          <Text style={styles.title}>Cartão de crédito</Text>
        </View>
        <View style={styles.endItem}>
          <CaretRight color="white" size={20} />
        </View>
      </View>
      <Text style={styles.subtitle}>Fatura atual</Text>
      <Text style={styles.amount}>R$ 0,00</Text>
      <Text style={styles.warning}>Limite disponível de R$ 200,00</Text>
      <Text style={styles.warning}>
        Limite adicional para Pix e boletos:
        <Text style={{ color: "#5C0098" }}> R$ 450,00</Text>
      </Text>
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
    justifyContent: "center",
  },
});
