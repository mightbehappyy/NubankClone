import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Options } from "../../UI/Options";
import {
  CurrencyEth,
  Barcode,
  CurrencyDollarSimple,
  Vault,
  DeviceMobileSpeaker,
  Heart,
  Globe,
  ChartBar,
} from "phosphor-react-native";

export function OptionsList() {
  const iconList = [
    {
      name: "Pix",
      image: <CurrencyEth color="white" />,
    },
    {
      name: "Pagar",
      image: <Barcode color="white" />,
    },
    {
      name: "Transferir",
      image: <CurrencyDollarSimple color="white" />,
    },
    {
      name: "Depositar",
      image: <Vault color="white" />,
    },
    {
      name: "Recarga de celular",
      image: <DeviceMobileSpeaker color="white" />,
    },
    {
      name: "Doação",
      image: <Heart color="white" />,
    },
    {
      name: "Transferir internac.",
      image: <Globe color="white" />,
    },
    {
      name: "Investir",
      image: <ChartBar color="white" />,
    },
  ];
  const renderItem = ({ item }) => (
    <Options iconImage={item.image} iconName={item.name} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={iconList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "Column",
    width: "100%",
    height: "auto",
    color: "#fff",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
