import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/ChecksScreens/Login";
import SignUp from "../pages/ChecksScreens/SignUp";
import DrawerRoutes from "./Drawer.routes";
import HomeProducer from "../pages/ProducerScreens/HomeProducer";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
      <Stack.Navigator initialRouteName="Login"
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
        name="DrawerRoutes"
        component={DrawerRoutes}
        />

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
            headerBackTitleVisible: false,
            headerTitle: "Voltar",
          }}
        />

        <Stack.Screen
        name="HomeProducer"
        component={HomeProducer}
        />
      </Stack.Navigator>
  );
};

export default StackRoutes;
