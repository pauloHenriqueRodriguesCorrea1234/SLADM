import { Text, View, StyleSheet, TextInput} from "react-native";
import Footer from '../../../components/Footer'
const AddProduct = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textNewProduct}>Novo Produto</Text>
      <TextInput
        placeholderTextColor="#000"
        style={styles.input}
        placeholder="Nome do produto"
      />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#4D8900",
  },
  textNewProduct: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 30,
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    textAlign: "center",
  },
  button: {},
});

export default AddProduct;

