import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from "react-native";
import Login from "../pages/ChecksScreens/Login";
import SignUp from "../pages/ChecksScreens/SignUp";

import HomeProducer from "../pages/ProducerScreens/HomeProducer";
import HomeUser from "../pages/UserScreens/HomeUser";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <View style={styles.conteiner}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeProducer">
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

          <Stack.Screen
            component={HomeUser}
            name="HomeUser"
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

const styles = StyleSheet.create({
  conteiner: {
    flex: 1
  }
})

export default Routes;
