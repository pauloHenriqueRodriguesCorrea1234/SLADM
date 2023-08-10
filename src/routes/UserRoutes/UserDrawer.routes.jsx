import { createDrawerNavigator } from "@react-navigation/drawer"

// Componentes
import UserTabRoutes from "./UserTab.routes"
import Instagram from "../../components/LinkInstagram"
import Logout from "../../components/Logout"

const Drawer = createDrawerNavigator()

const UserDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "",
        headerTintColor: "#fff",
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#777a67",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={UserTabRoutes}
        options={{
          drawerLabel: "Inicio",
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

export default UserDrawerRoutes
