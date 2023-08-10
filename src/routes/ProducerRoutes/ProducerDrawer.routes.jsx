import { createDrawerNavigator } from "@react-navigation/drawer"

import TabRoutes from "./ProducerTab.routes"
import Instagram from "../../components/LinkInstagram"
import Logout from "../../components/Logout"

const Drawer = createDrawerNavigator()

const ProducerDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Menu",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#777a67",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
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
  )
}

export default ProducerDrawerRoutes
