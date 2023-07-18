import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, Zocial } from "@expo/vector-icons";

import MyProducts from "../../pages/ProducerScreens/MyProducts";
import HomeProducer from "../../pages/ProducerScreens/HomeProducer";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeProducer"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        
        tabBarStyle: {
          backgroundColor: "#b06c49"
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeProducer"
        component={HomeProducer}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Feather name="home" color={color} size={size} />;
          },
          tabBarLabel: "Início"
        }}
      />
      <Tab.Screen
        name="MEU PRODUTOS"
        component={MyProducts}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Zocial name="cart" color={color} size={size}/>;
          },
          tabBarLabel:"Meus produtos"
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
