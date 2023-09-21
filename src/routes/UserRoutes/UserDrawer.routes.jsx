import { createDrawerNavigator } from "@react-navigation/drawer"

// Library – vector icons
import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

// User menu components 
import UserTabRoutes from "./UserTab.routes"
import Instagram from "../../components/LinkInstagram"
import Logout from "../../components/Logout"

// Creation of Drawer Navigator for user routes
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

      {/* Route to the user's home screen (UserTabRoutes) */}
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

      {/* {Route to Instagram screen (LinkInstagram)} */}
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

      {/* Route to Logout screen */}
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
