import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Login from "../pages/ChecksScreens/Login";
import SignUp from "../pages/ChecksScreens/SignUp";
import Home from "../pages/UserScreens/Home";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            component={Login}
            name="Login"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
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
          component={Home}
          name="Home"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Routes;
