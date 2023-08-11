import { createDrawerNavigator } from "@react-navigation/drawer"

import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

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
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Instagram"
        component={Instagram}
        options={{
          drawerLabel: "Instagram",
          drawerIcon: ({ size, color }) => (
            <AntDesign name="instagram" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Sair",
          drawerIcon: ({ size, color }) => (
            <Feather name="log-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default UserDrawerRoutes
