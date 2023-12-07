// Navigation Components
import { createStackNavigator } from "@react-navigation/stack";

// Verification screen components
import Login from "../pages/ChecksScreens/Login";
import SignUp from "../pages/ChecksScreens/SignUp";

// User screen context components
import UserDrawerRoutes from "./UserRoutes/UserDrawer.routes";

// Producer screen context components
import Details from "../pages/ProducerScreens/Details";
import AddProduct from "../pages/ProducerScreens/AddProduct";
import ProducerDrawerRoutes from "./ProducerRoutes/ProducerDrawer.routes";
import ProducersWithThisProduct from "../pages/UserScreens/ProducersWithThisProduct";

// Creation of Stack Navigator for stack routes
const Stack = createStackNavigator();

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

        {/* Login route */}
        <Stack.Screen component={Login} name="Login" />

        {/* Route for when you are a producer (ProducerDrawerRoutes) */}
        <Stack.Screen
          name="ProducerDrawerRoutes"
          component={ProducerDrawerRoutes}
        />

        {/* Route for when you are a user (UserDrawerRoutes) */}
        <Stack.Screen name="UserDrawerRoutes" component={UserDrawerRoutes} />
      </Stack.Group>

      {/* Route to add product */}
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

      {/* Route details screen */}
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

      {/* Route Registration screen */}
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
          title: "Produtores que comercializam"
        }}
        name="ProducersWithThisProduct"
        component={ProducersWithThisProduct}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
