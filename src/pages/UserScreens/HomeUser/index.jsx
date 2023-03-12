import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../../../components/Footer";

import { itens } from "../../../../data/product.json";

import FruitCards from "../../../components/FruitCards";
import { FlatList } from "react-native";
const HomeUser = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itens);
  }, []);

  return (
    <View style={styles.conteiner}>
      <Text>User routes</Text>
      {products.length > 0 && <FlatList
      
      />}
      <Footer />
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
