import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Zocial from "react-native-vector-icons/Zocial";
import { StackActions, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Footer = () => {
  const navigation = useNavigation();

  const HomeProducer = () => {
    navigation.navigate("HomeProducer");
  };
  const MyProducts = () => {
    navigation.navigate("Products");
  };
  const Menu = () => {
    navigation.dispatch(StackActions.push("Menu"));
  };
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity onPress={HomeProducer} style={styles.toucgable}>
        <Ionicons name="home" style={styles.img} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={MyProducts} style={styles.toucgable}>
        <Zocial name="cart" style={styles.img} />
        <Text>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Menu} style={styles.toucgable}>
        <Feather name="menu" ma style={styles.img} />
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
    borderRadius: 5,
    width: "100%",
  },
  toucgable: {
    padding: 5,
    alignItems: "center",
  },
  img: {
    fontSize: 40,
  },
});

export default Footer;
