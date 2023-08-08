import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "../../Layout/Header";
import { MoneyCount } from "../../Layout/MoneyCount";
import { Options } from "../../UI/Options";
import { OptionsList } from "../../Layout/OptionsList";

export function Initial() {
  return (
    <View style={styles.container}>
      <Header />
      <MoneyCount />
      <OptionsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
