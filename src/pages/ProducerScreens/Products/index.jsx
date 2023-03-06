import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "../../../components/Footer";

const Products = () => {
  const Search = () => {
    alert("FIME");
  };
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titleMyProducts}>MEUS PRODUTOS</Text>

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

      <View style={styles.viewAddProduct}>
        <TouchableOpacity style={styles.touchableAddProduct}>
          <Ionicons style={styles.addProduct} name="add" />
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#008000",
  },
  titleMyProducts: {
    textAlign: "center",
    fontSize: 30,
    margin: 15,
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
    color: "#000",
  },
  addProduct: {
    fontSize: 35,
  },
  viewAddProduct: {
    // position: "absolute",
    // justifyContent:'flex-start'
    flex: 1,
    flexDirection:'row-reverse'
  },
  touchableAddProduct: {
    alignItems: "center",
    height: 50,
    width: 50,
    justifyContent: "center",
    backgroundColor: "#d9d9d9",

    borderRadius: 30,
  },
});

export default Products;
