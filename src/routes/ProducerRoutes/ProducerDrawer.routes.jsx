import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./ProducerTab.routes";

import { Feather } from "@expo/vector-icons";
import { Linking } from "react-native";
import { auth } from "../../services/firebaseAuthentication";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Logout = () => {
  
  const navigation = useNavigation();
  navigation.navigate("Login");
  auth.signOut();
};
const Instagram = () => {
  Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/");
};

const ProducerDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        title: "",
        headerStyle: {
          backgroundColor: "#4D8900",
        },
      }}
    >
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => {
            <Feather name="home" color={color} size={size} />;
          },
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="instagram"
        component={Instagram}
        options={{
          drawerLabel: "Instagram",
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
};

export default ProducerDrawerRoutes;
