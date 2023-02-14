import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const FruitCards = ({ productName, imgProduct }) => {
  return (
    <TouchableOpacity style={styles.conteiner}>

      <Image 
      source={{ uri: imgProduct }} 
      style={StyleSheet.img} />
      
      <Text style={styles.text}>{productName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imgProduct: {
    height: 45,
    width: 45,
  },
  text: {
    fontSize: 24,
    paddingRight: 10,
  },
});
