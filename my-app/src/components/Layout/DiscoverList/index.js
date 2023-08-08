import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Options } from "../../UI/Options";
import { DiscoverMore } from "../../UI/DiscoverMore";

export function DiscoverList() {
  const iconList = [
    {
      image: require("../../../../assets/NubankDiscoverMore.jpg"),
      title: "Nu Limite Garantido",
      description: "Seu dinheiro vira mais limite rendendo a 100% do DCI",
      buttonText: "Aumentar limite",
    },
    {
      image: require("../../../../assets/NubankDiscoverMore2.jpg"),
      title: "Seguro de vida",
      description: "Cuide de quem você ama de um jeito simples",
      buttonText: "Conhecer",
    },
    {
      image: require("../../../../assets/NubankDiscoverMore3.jpg"),
      title: "Indique o Nu para amigos",
      description: "Espalhe como é simples estar no controle",
      buttonText: "Indicar amigos",
    },
    {
      image: require("../../../../assets/NubankDiscoverMore4.jpg"),
      title: "Traga seys dados",
      description: "Mais chances de limites e produtos com a sua cara",
      buttonText: "Saiba mais",
    },
    {
      image: require("../../../../assets/NubankDiscoverMore5.jpg"),
      title: "WhatsApp",
      description: "Pagamentos seguros, rápidos e sem tarifa.",
      buttonText: "Quero conhecer",
    },
  ];
  const renderItem = ({ item }) => (
    <DiscoverMore
      iconImage={item.image}
      title={item.title}
      description={item.description}
      buttonText={item.buttonText}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra mais</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
    marginLeft: 10,
  },
});
