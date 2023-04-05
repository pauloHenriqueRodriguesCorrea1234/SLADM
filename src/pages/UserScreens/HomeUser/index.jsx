import FruitCards from "../../../components/FruitCards";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState, ScrollView } from "react"
import { itens } from "../../../../data/itens.json";

const HomeUser = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itens);
  }, []);

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

        {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards
                productName={item.nomeProduto}
                coverUrl={item.coverUrl}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      </View>
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
