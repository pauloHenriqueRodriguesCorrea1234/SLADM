import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Linking } from "react-native";

const Instagram = () => {
  const linkInstagram = useState([Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/")]);

  // Get the navigation object using the 'useNavigate' hook
  const navigation = useNavigation();
  // Navigate to the "Home" screen
  navigation.navigate("Home");
};

export default Instagram;
