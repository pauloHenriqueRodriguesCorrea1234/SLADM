import { useNavigation } from "@react-navigation/native";
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

  const navigation = useNavigation();

  const Search = () => {
    alert("FIME");
  };

  const Add = () => {
    navigation.navigate("AddProduct");
  }

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
        <TouchableOpacity
        onPress={Add}
          activeOpacity={0.7}
          style={styles.touchableAddProduct}
        >
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
    backgroundColor: "#4D8900",
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
    flex: 1,
    flexDirection: "row-reverse",
  },
  touchableAddProduct: {
    alignItems: "center",
    height: 60,
    width: 60,
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 30,
    position: "absolute",
    right: "84%",
    bottom: "3%",
  },
});

export default Products;
