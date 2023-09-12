import { createStackNavigator } from "@react-navigation/stack"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"

import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes"
import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes"
import AddProduct from "../pages/ProducerScreens/AddProduct"
import Details from "../pages/ProducerScreens/Details"

// Criação do Stack Navigator para as rotas de pilha
const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#777a67"
          },
          title: "",
          headerTransparent: true,
          headerShown: false,
        }}
      >

        {/* Rota para a tela de Login */}
        <Stack.Screen component={Login} name="Login" />

        {/* Rota para as rotas de produtor (ProducerDrawerRoutes) */}
        <Stack.Screen
          name="ProducerDrawerRoutes"
          component={ProducerDrawerRoutes}
        />

        {/* Rota para as rotas de usuário (UserDrawerRoutes) */}
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

      {/* Rota para a tela de SignUp */}
      <Stack.Screen
        component={SignUp}
        name="SignUp"
        options={{
          headerTransparent: false,
          headerTintColor: "#fff",
          headerTitle: "Voltar",
        }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes
