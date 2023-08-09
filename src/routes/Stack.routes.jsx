import { createStackNavigator } from "@react-navigation/stack"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"

import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes"
import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes"

const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
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
        component={SignUp}
        name="SignUp"
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitle: "Voltar",
        }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes
