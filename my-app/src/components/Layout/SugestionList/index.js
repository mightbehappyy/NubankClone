import { StyleSheet, Text, View, FlatList } from "react-native";
import { SugestionCards } from "../../UI/SugestionCards";

export function SugestionList() {
  const sugestionList = [
    {
      title: "Pix no crédito:",
      description: "transfira sem usar o saldo da conta",
    },
    {
      title: "Facilite seus planos futuros:",
      description: "guarde dinheiro nas Caixinhas",
    },
    {
      title: "Convite amigos para o Nubank",
      description: "e desbloqueie brasões incríveis",
    },
  ];
  const renderItem = ({ item }) => (
    <SugestionCards Title={item.title} Description={item.description} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={sugestionList}
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
    width: "auto",
    height: "auto",
    color: "#fff",
    marginVertical: 10,
  },
});
