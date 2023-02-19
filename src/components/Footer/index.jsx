import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const Footer = ( { style } ) => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.toucgable}>
        <Image
          style={styles.img}
          source={require("../../assets/img/logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.toucgable}>
        <Image
          style={styles.img}
          source={require("../../assets/img/logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.toucgable}>
        <Image
          style={styles.img}
          source={require("../../assets/img/logo.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#d9d9d9",
    justifyContent: "space-between",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  toucgable: {
    padding: 5,
    alignItems:"center"
  },
  img: {
    height: 50,
    width: 50,
  },
});

export default Footer;
