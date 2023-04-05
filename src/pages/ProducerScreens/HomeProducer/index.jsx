import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useEffect, useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "../../../components/Footer";
import FruitCards from "../../../components/FruitCards";
import { itens } from "../../../../data/itens.json";

const HomeProducer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itens);
  }, []);

  const Search = () => {
    alert("FIME");
  };
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titleProduct}>PRODUTOS</Text>

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

      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards name={item.nomeProduto} img={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#4D8900",
  },
  titleProduct: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
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
  input: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  icon: {
    fontSize: 25,
    marginRight: 20,
  },
});
export default HomeProducer;
