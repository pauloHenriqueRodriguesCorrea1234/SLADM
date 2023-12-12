import { createDrawerNavigator } from "@react-navigation/drawer"

// Library – vector icons
import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

// Producer menu components
import TabRoutes from "./ProducerTab.routes"
import Logout from "../../components/Logout"
import Instagram from "../../components/Instagram"

// Criação do Drawer Navigator para as rotas do produtor
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
