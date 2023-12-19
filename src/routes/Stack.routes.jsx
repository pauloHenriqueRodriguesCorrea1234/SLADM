import { createStackNavigator } from "@react-navigation/stack"

import { Text } from "react-native"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"

import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes"

import Details from "../pages/ProducerScreens/Details"
import AddProduct from "../pages/ProducerScreens/AddProduct"
import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes"
import ProducersWithThisProduct from "../pages/UserScreens/ProducersWithThisProduct"
import HeaderScreen from "../pages/UserScreens/HeaderScreen"

const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#777a67",
          },
          title: "",
          headerTransparent: true,
          headerShown: false,
        }}
      >
        <Stack.Screen component={Login} name="Login" />

        <Stack.Screen
          name="ProducerDrawerRoutes"
          component={ProducerDrawerRoutes}
        />

        <Stack.Screen name="UserDrawerRoutes" component={UserDrawerRoutes} />
      </Stack.Group>

      <Stack.Screen
        component={AddProduct}
        name="AddProduct"
        options={{
          headerTransparent: false,
          headerShown: true,
          headerTintColor: "#000",
          headerTitle: "Voltar",
        }}
      />

      <Stack.Screen
        component={Details}
        name="Details"
        options={{
          headerTransparent: false,
          headerShown: true,
          headerTintColor: "#000",
          headerTitle: "Voltar",
        }}
      />

      <Stack.Screen
        component={SignUp}
        name="SignUp"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "Voltar",
        }}
      />

      <Stack.Screen
        options={{
          headerTitle: () => <HeaderScreen /> ,
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
        name="ProducersWithThisProduct"
        component={ProducersWithThisProduct}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes
