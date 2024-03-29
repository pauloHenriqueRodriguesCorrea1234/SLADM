import { createDrawerNavigator } from "@react-navigation/drawer"

import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

import TabRoutes from "./ProducerTab.routes"
import Instagram from "../../components/LinkInstagram"
import Logout from "../../components/Logout"

// Criação do Drawer Navigator para as rotas do produtor
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
       {/* Rota para a tela de início (TabRoutes) */}
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

      {/* Rota para a tela de Instagram (LinkInstagram) */}
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

      {/* Rota para a tela de Logout (Logout) */}
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

export default ProducerDrawerRoutes
