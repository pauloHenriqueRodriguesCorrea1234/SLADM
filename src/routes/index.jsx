import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../pages/ChecksScreens/Login"
import SignUp from "../pages/ChecksScreens/SignUp"
// import HomeUser from "../pages/UserScreens/HomeUser";
import Menu from "../components/Menu"
import HomeProducer from "../pages/ProducerScreens/HomeProducer"
import Products from "../pages/ProducerScreens/Products"
// import AddProduct from "../pages/ProducerScreens/AddProduct";

import { Conteiner } from './styles'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Conteiner>
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
            component={HomeProducer}
            name="HomeProducer"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />
          {/* 
          <Stack.Screen
            component={HomeUser}
            name="HomeUser"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            component={Menu}
            name="Menu"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />

          <Stack.Screen
            component={Products}
            name="Products"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />

          {/* <Stack.Screen
            component={AddProduct}
            name="AddProduct"
            options={{
              headerTransparent: true,
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Conteiner>
  );
};

export default Routes;
