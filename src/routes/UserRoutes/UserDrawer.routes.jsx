// Componentes do React Native
import { Linking } from "react-native"

// Biblioteca de Navegação
import { useNavigation } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

// Configuração do firebase 
import { auth } from "../../services/firebaseAuthentication"

// Componentes
import UserTabRoutes from "./UserTab.routes"

const Drawer = createDrawerNavigator()

const UserDrawerRoutes = () => {
  const navigation = useNavigation()

  const Logout = () => {
    navigation.navigate("Login")
    auth.signOut()
  }
  
  const Instagram = () => {
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/")
  }

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
