import { View, Text, StyleSheet, TextInput } from "react-native";
import Footer from "../../../components/Footer";

import Ionicons from "react-native-vector-icons/Ionicons";

const HomeProducer = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titleProduct}>PRODUCT</Text>
      <View style={styles.viewInput}>
        <TextInput
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="Escreva o nome do produto"
        />
        <Ionicons name="search" style={{ fontSize: 25 }} />
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
  titleProduct: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
  },
  viewInput: {
    margin: 10,
    flexDirection: "row",
  },
  input: {
    textAlign: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    height: 50,
    color: "#fff",
    fontSize: 16,
    width: "100%",
  },
});
export default HomeProducer;
