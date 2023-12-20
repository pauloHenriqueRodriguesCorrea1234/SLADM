import { createStackNavigator } from "@react-navigation/stack"

import { Text } from "react-native"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"

import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes"

import Details from "../pages/ProducerScreens/Details"
import AddProduct from "../pages/ProducerScreens/AddProduct"
import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes"
import ProducersWithThisProduct from "../components/ProducersWithThisProduct"
import Header from "../components/Header"

const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
          headerShown: false,
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen component={Login} name="Login" />
        
        <Stack.Screen
          name="ProducerDrawerRoutes"
          component={ProducerDrawerRoutes}
        />

        <Stack.Screen name="UserDrawerRoutes" component={UserDrawerRoutes} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerTransparent: false,
          headerShown: true,
          headerTintColor: "#000",
          headerTitle: "Voltar",
        }}
      >
        <Stack.Screen component={AddProduct} name="AddProduct" />
        <Stack.Screen component={Details} name="Details" />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerTransparent: true,
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen
          options={{ headerTitle: () => <Header /> }}
          name="ProducersWithThisProduct"
          component={ProducersWithThisProduct}
        />
        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{
            headerTitle: "Voltar",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackRoutes
