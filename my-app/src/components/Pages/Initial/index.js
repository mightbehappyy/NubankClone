import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Header } from "../../Layout/Header";
import { MoneyCount } from "../../Layout/MoneyCount";
import { Options } from "../../UI/Options";
import { OptionsList } from "../../Layout/OptionsList";
import { MyCards } from "../../UI/MyCards";
import { SugestionList } from "../../Layout/SugestionList";
import { DivisionLine } from "../../UI/DivisionLine";
import { MyDebt } from "../../UI/MyDebt";
import { MyLoan } from "../../UI/myLoan";
import { MyInvestments } from "../../UI/MyInvestments";
import { MyInsurance } from "../../UI/Insurane";
import { Shopping } from "../../UI/Shopping";
import { DiscoverList } from "../../Layout/DiscoverList";

export function Initial() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Header />
        <MoneyCount />
        <OptionsList />
        <View style={styles.center}>
          <MyCards />
        </View>
        <SugestionList />
        <DivisionLine />
        <MyDebt />
        <DivisionLine />
        <MyLoan />
        <DivisionLine />
        <MyInvestments />
        <DivisionLine />
        <MyInsurance />
        <DivisionLine />
        <Shopping />
        <DivisionLine />
        <DiscoverList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5C0098",
  },
  center: {
    alignItems: "center",
  },
  background: {
    backgroundColor: "#000",
  },
});
