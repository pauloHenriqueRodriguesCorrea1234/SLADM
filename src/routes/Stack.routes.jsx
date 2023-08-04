import { createStackNavigator } from "@react-navigation/stack"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"

import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes"
import HomeProducer from "../pages/ProducerScreens/HomeProducer"
import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes"

const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="ProducerDrawerRoutes"
        component={ProducerDrawerRoutes}
      />

      <Stack.Screen name="UserDrawerRoutes" component={UserDrawerRoutes} />

      <Stack.Screen
        component={SignUp}
        name="SignUp"
        options={{
          headerStyle: {
            backgroundColor: "#008000",
            borderBottomWidth: 0.8,
            borderBottomColor: "#fff",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: true,
          headerTitle: "Voltar",
        }}
      />

      <Stack.Screen name="HomeProducer" component={HomeProducer} />
    </Stack.Navigator>
  )
}

export default StackRoutes
