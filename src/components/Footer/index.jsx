import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Footer = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.toucgable}>
        <Ionicons  name="home" style={{ color: "#000", fontSize: 30 }} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.toucgable}>
        <Feather name="menu" ma style={{ color: "#000", fontSize: 40 }} />
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#d9d9d9",
    justifyContent: "space-around",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    position: 'absolute',
    width: "100%",
    marginTop: "176%"
  },
  toucgable: {
    padding: 5,
    alignItems:"center"
  },
  img: {
    height: 45,
    width: 45,
  },
});

export default Footer;
