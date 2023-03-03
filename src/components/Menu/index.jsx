import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Footer from "../Footer";
import { auth } from "../../services/firebaseAuthentication";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

const Menu = () => {
  const navigation = useNavigation();

  const Logout = () => {
    auth.signOut();
    navigation.navigate("Login");
  };

  const Instagram = () => {

    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/")
  };

  return (
    <View style={styles.conteinerPrncipal}>

      <View style={styles.conteiner}>
        
        <TouchableOpacity onPress={Logout} style={styles.touchable}>
          <Feather name="log-out" style={styles.img} />
          <Text>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Instagram} style={styles.touchable}>
          <AntDesign style={styles.img} name="instagram" />
          <Text>Instagram</Text>
        </TouchableOpacity>
      </View>
      
      <Footer />

    </View>
  );
};

const styles = StyleSheet.create({
  conteinerPrncipal: {
    flex: 1,
    backgroundColor: "#4D8900",
  },
  conteiner: {
    marginVertical: "10%",
    marginHorizontal: "5%",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    flex: 1,
  },
  img: {
    fontSize: 54,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});

export default Menu;
