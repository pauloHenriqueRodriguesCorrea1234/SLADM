import { createDrawerNavigator } from "@react-navigation/drawer"

// Library – vector icons
import { Ionicons, Feather } from "react-native-vector-icons"

import HomeUser from "../../pages/UserScreens/HomeUser"
import Logout from "../../components/Logout"

const Drawer = createDrawerNavigator()

const UserDrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "",
        headerTintColor: "#fff",
        headerShown:true,
        headerStyle: {
          backgroundColor: "#006400",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeUser}
        options={{
          drawerLabel: "Inicio",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
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
