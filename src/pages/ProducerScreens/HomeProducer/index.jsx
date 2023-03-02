import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

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
      </View>
      <TouchableOpacity style={{marginTop: "150%", marginLeft: "85%"}}>
        <AntDesign name="plus" style={{ color: "#000", fontSize: 50, }} />
      </TouchableOpacity>
      
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
  },
  input: {
    textAlign: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    height: 50,
    color: "#fff",
    fontSize: 16,
  },
});
export default HomeProducer;
