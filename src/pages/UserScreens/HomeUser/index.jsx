import FruitCards from "../../../components/FruitCards";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeUser = () => {
  const dados = [
    { id: 1, key: "linha 1", uid: "1" },
    { id: 2, key: "linha 2" },
    { id: 3, key: "linha 3" },
    { id: 4, key: "linha 4" },
    { id: 5, key: "linha 5" },
    { id: 6, key: "linha 6" },
    { id: 7, key: "linha 7" },
    { id: 8, key: "linha 8" },
    { id: 9, key: "linha 9" },
    { id: 10, key: "linha 10" },
    { id: 11, key: "linha 11" },
    { id: 12, key: "linha 12" },
    { id: 13, key: "linha 13" },
    { id: 14, key: "linha 14" },
    { id: 15, key: "linha 15" },
    { id: 16, key: "linha 16" },
    { id: 17, key: "linha 17" },
    { id: 18, key: "linha 18" },
    { id: 19, key: "linha 19" },
    { id: 20, key: "linha 20" },
    { id: 21, key: "linha 21" },
    { id: 22, key: "linha 22" },
    { id: 23, key: "linha 23" },
    { id: 24, key: "linha 24" },
    { id: 25, key: "linha 25" },
  ];

  const Search = () => {
    alert("...");
  };

  return (
    <View style={styles.conteiner}>
      <Text style={styles.titleProduct}>Produtos</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Escreva o nome do produto"
        />
        <TouchableOpacity onPress={Search}>
          <Ionicons style={styles.icon} name="search" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              return alert("fenufbeuebefub");
            }}
          >
            <FruitCards productName={item.key} key={item.id} />
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
  titleProduct: {
    textAlign: "center",
    marginHorizontal: "2%",
    fontSize: 32,
  },
  input: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  viewInput: {
    flexDirection: "row",
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 10,
  },
  icon: {
    fontSize: 25,
    marginRight: 20,
  },
});

export default HomeUser;
