import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { User, Eye, Question, PlusCircle } from "phosphor-react-native";
export function DivisionLine() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#222",
    borderBottomWidth: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
