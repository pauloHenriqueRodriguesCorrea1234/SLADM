import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Footer = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.toucgable}>
        <AntDesign name="home" style={{ color: "#f00", fontSize: 50 }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.toucgable}>
        <AntDesign name="windows" style={{ color: "#f00", fontSize: 50 }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.toucgable}>
        <AntDesign name="home" style={{ color: "#f00", fontSize: 50 }} />
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
  },
  img: {
    height: 45,
    width: 45,
  },
});

export default Footer;
