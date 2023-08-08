import { StatusBar } from "expo-status-bar";
import { CaretRight, DeviceMobileSpeaker, Heart } from "phosphor-react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export function MyInsurance() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.startItem}>
          <Text style={styles.title}>Seguros</Text>
        </View>
        <View style={styles.endItem}>
          <CaretRight color="white" size={20} />
        </View>
      </View>
      <Text style={styles.subtitle}>
        Proteção para você cuidar do que importa
      </Text>
      <TouchableOpacity style={styles.card}>
        <Heart color="white" size={24} style={{ marginHorizontal: 5 }} />
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
            marginLeft: 15,
            flex: 1,
          }}
        >
          Seguro Vida
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
            color: "#5C0098",
          }}
        >
          Conhecer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <DeviceMobileSpeaker
          color="white"
          size={24}
          style={{ marginHorizontal: 5 }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
            marginLeft: 15,
            flex: 1,
          }}
        >
          Seguro celular
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
            color: "#5C0098",
          }}
        >
          Conhecer
        </Text>
      </TouchableOpacity>
    </View>
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
  card: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    paddingHorizontal: 15,
    backgroundColor: "#222",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
});
