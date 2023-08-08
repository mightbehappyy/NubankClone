import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { User, Eye, Question, PlusCircle } from "phosphor-react-native";
export function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={styles.circle}>
          <User color="white" size={30} />
        </View>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          Olá, Pedro
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 50,
        }}
      >
        <Eye color="white" size={24} style={{ marginHorizontal: 5 }} />
        <Question color="white" size={24} style={{ marginHorizontal: 5 }} />
        <PlusCircle color="white" size={24} style={{ marginHorizontal: 5 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    paddingHorizontal: 15,
    backgroundColor: "#5C0098",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#9B03FE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
