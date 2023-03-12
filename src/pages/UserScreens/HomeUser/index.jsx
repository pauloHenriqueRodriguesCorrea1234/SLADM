import FruitCards from  '../../../components/FruitCards'
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet, View, FlatList } from "react-native";

const HomeUser = () => {
  const dados = [
    { key: "linha 1" },
    { key: "linha 2" },
    { key: "linha 3" },
    { key: "linha 4" },
    { key: "linha 5" },
    { key: "linha 6" },
    { key: "linha 7" },
    { key: "linha 8" },
    { key: "linha 9" },
    { key: "linha 10" },
    { key: "linha 11" },
    { key: "linha 12" },
  ];

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <FruitCards productName={item.key}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#4d8900",
  },
});

export default HomeUser;
