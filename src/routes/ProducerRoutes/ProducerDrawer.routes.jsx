import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services/firebaseAuthentication";

import TabRoutes from "./ProducerTab.routes";
import Instagram from "../../components/Instagram";

const Drawer = createDrawerNavigator();

const Logout = () => {
  
  const navigation = useNavigation();
  navigation.navigate("Login");
  auth.signOut();
};


const ProducerDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Menu",
        headerTintColor:"#fff",
        headerStyle: {
          backgroundColor: "#777a67",
        },
      }}
    >
      <Drawer.Screen
        name="PRODUTOS"
        component={TabRoutes}
        options={{
          drawerLabel: "Início",
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

export default ProducerDrawerRoutes;
