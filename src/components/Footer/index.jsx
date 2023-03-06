import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Zocial from "react-native-vector-icons/Zocial";
import { StackActions, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Footer = () => {
  const navigation = useNavigation();

  const MyProducts = () => {
    navigation.navigate("Products");
  };
  const Logout = () => {
    navigation.dispatch(StackActions.push("Menu"));
  };
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.toucgable}>
        <Ionicons name="home" style={{ color: "#000", fontSize: 30 }} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={MyProducts} style={styles.toucgable}>
        <Zocial name="cart" style={{ color: "#000", fontSize: 30 }} />
        <Text>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Logout} style={styles.toucgable}>
        <Feather name="menu" ma style={{ color: "#000", fontSize: 40 }} />
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#d9d9d9",
    justifyContent: "space-around",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    position: "relative",
    width: "100%",
  },
  toucgable: {
    padding: 5,
    alignItems: "center",
  },
  img: {
    height: 45,
    width: 45,
  },
});

export default Footer;
