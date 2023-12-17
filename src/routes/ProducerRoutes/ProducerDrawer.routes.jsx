import { createDrawerNavigator } from "@react-navigation/drawer"

// Library – vector icons
import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

// Producer menu components
import TabRoutes from "./ProducerTab.routes"
import Logout from "../../components/Logout"

const Drawer = createDrawerNavigator()

const ProducerDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Menu",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#006400",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="logout"
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

export default ProducerDrawerRoutes
