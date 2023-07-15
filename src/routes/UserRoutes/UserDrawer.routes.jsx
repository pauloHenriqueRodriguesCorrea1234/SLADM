import { createDrawerNavigator } from "@react-navigation/drawer";
import { auth } from "../../services/firebaseAuthentication";
import { Linking } from "react-native";
import UserTabRoutes from "./UserTab.routes";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const UserDrawerRoutes = () => {
  const navigation = useNavigation()
  const Logout = () => {
    navigation.navigate("Login");
    auth.signOut();
  };
  const Instagram = () => {
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/");
  };

  return (
    <Drawer.Navigator
    initialRouteName="Home"
    >
      <Drawer.Screen
      name="Home"
      component={UserTabRoutes}
      options={{
        drawerLabel:"Inicio"
      }}

      />
      <Drawer.Screen
        name="Instagram"
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

export default UserDrawerRoutes;
