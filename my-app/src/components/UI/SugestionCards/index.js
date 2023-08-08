import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function SugestionCards({ Title, Description }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{Title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: "#5C0098" }]}>{Description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 100,
    padding: 15,
    marginLeft: 15,
    justifyContent: "center",
    backgroundColor: "#222",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "column",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
