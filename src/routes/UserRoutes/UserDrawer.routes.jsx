import { createDrawerNavigator } from "@react-navigation/drawer";
import { auth } from "../../services/firebaseAuthentication";
import { Linking } from "react-native";

const Drawer = createDrawerNavigator();

const UserDrawerRoutes = () => {
  const Logout = () => {
    auth.signOut();
  };
  const Instagram = () => {
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/");
  };

  return (
    <Drawer.Navigator>
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
