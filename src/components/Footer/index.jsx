// Styles
import { Conteiner, TouchableOpacity, Text } from "./styles.js";

// Icons
import Feather from "react-native-vector-icons/Feather";
import Zocial from "react-native-vector-icons/Zocial";
import Ionicons from "react-native-vector-icons/Ionicons";

// Navigation components
import { StackActions, useNavigation } from "@react-navigation/native";

export const Footer = () => {
  const navigation = useNavigation();

  const Home = () => {
    navigation.push("HomeProducer");
  };
  const MyProducts = () => {
    navigation.push("Products");
  };

  const Menu = () => {
    navigation.dispatch(StackActions.push("Menu"));
  };
  return (
    <Conteiner>
      <TouchableOpacity onPress={Home}>
        <Ionicons name="home" style={{ fontSize: 40 }} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={MyProducts}>
        <Zocial name="cart" style={{ fontSize: 40 }} />
        <Text>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Menu}>
        <Feather name="menu" style={{ fontSize: 40 }} />
        <Text>Menu</Text>
      </TouchableOpacity>
    </Conteiner>
  );
};

export default Footer;
