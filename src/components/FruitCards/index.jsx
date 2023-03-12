import { Image, StyleSheet, Text, View } from "react-native";

const FruitCards = ({ productName, imgProduct }) => {
  return (
    <View style={styles.conteiner}>
      <Image source={{ uri: imgProduct }} style={StyleSheet.img} />
      <Text style={styles.text}>{productName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 1.1,
    marginHorizontal: "2%",
    marginVertical: "3%",
    flexDirection: "row",
    backgroundColor: "#d1d0ca",
    justifyContent: "space-between",
    borderRadius: 10,
  },

  imgProduct: {
    height: 120,
    width: 120,
  },
  text: {
    fontSize: 17,
    paddingRight: 9,
    alignItems: "flex-end",
  },
});

export default FruitCards;
