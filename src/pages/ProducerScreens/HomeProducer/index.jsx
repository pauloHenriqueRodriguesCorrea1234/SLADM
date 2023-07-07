import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// React States
import { useEffect, useState } from "react";

// products json
import { itens } from "../../../../data/itens.json";

// Components
import Footer from "../../../components/Footer";
import FruitCards from "../../../components/FruitCards";
import { ExitApp } from "../../../components/BackHandler";

const HomeProducer = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setProducts(itens);
    ExitApp();
  }, []);

  useEffect(() => {
    if (filter) {
      const filteredProducts = itens.filter((p) =>
        p.nomeProduto.toLowerCase().includes(filter.toLowerCase())
      );

      setProducts(filteredProducts);
    } else {
      setProducts(itens);
    }
  }, [filter]);

  return (
    <View style={styles.conteiner}>
      <Text style={styles.titleProduct}>PRODUTOS</Text>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Escreva o nome do produto"
          value={filter}
          onChangeText={setFilter}
        />
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
