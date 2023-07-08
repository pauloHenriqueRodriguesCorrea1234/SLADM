import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "../../../components/Footer";

import { Conteiner, TitleMyProducts, ViewInput, Input, ViewAddProduct, TouchableAddProduct } from './style'

const Products = () => {

  const navigation = useNavigation();

  const Search = () => {
    alert("FIME");
  };

  const Add = () => {
    navigation.navigate("AddProduct");
  }

  return (
    <Conteiner>
      <TitleMyProducts>MEUS PRODUTOS</TitleMyProducts>

      <ViewInput>
        <Input
          placeholderTextColor="#000"
          placeholder="Escreva o nome do produto"
        />
        <TouchableOpacity onPress={Search}>
          <Ionicons style={styles.icon} name="search" />
        </TouchableOpacity>
      </ViewInput>

      <ViewAddProduct>
        <TouchableAddProduct 
        onPress={Add}
          activeOpacity={0.7}
        >
          <Ionicons style={styles.addProduct} name="add" />
        </TouchableAddProduct>
      </ViewAddProduct>

      <Footer />
    </Conteiner>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 20,
    color: "#000",
  },
  addProduct: {
    fontSize: 35,
  },
});

export default Products;
