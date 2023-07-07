// Styles
import {
  MainConteiner,
  ContentConteiner,
  Title,
  TouchableOpacity,
  Text,
} from "./styles";
import { Linking } from "react-native";

// Icons
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

// Components
import Footer from "../Footer";

// Autentication with the firebase
import { auth } from "../../services/firebaseAuthentication";

// Navigations components
import { useNavigation, StackActions } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  const Logout = () => {
    auth.signOut();
    navigation.dispatch(StackActions.popToTop());
  };

  const Instagram = () => {
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/");
  };

  return (
    <MainConteiner>
      <Title>MENU</Title>
      <ContentConteiner>
        <TouchableOpacity onPress={Logout}>
          <Feather name="log-out" style={{ fontSize: 54 }} />
          <Text>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Instagram}>
          <AntDesign name="instagram" style={{ fontSize: 54 }} />
          <Text>Instagram</Text>
        </TouchableOpacity>
      </ContentConteiner>

      <Footer />
    </MainConteiner>
  );
};

export default Menu;
