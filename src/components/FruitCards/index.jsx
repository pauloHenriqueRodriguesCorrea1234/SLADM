import { Image, StyleSheet, Text, View } from "react-native";

const FruitCards = ({ name, img }) => {
  return (
    <View style={styles.conteiner}>
      <Image source={{ uri: img }} style={styles.imgProduct} />
      <Text style={styles.text}>{name}</Text>
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
    textAlign: "right",
    fontStyle: "italic",
    fontSize: 17,
    paddingRight: 9,
    alignItems: "flex-end",
  },
});

export default FruitCards;
