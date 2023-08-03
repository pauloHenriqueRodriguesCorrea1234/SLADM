import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AntDesign from "react-native-vector-icons/AntDesign"

import MyProducts from "../../pages/ProducerScreens/MyProducts"
import HomeProducer from "../../pages/ProducerScreens/HomeProducer"

const Tab = createBottomTabNavigator()

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeProducer"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          backgroundColor: "#b06c49",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeProducer"
        component={HomeProducer}
        options={{
          tabBarIcon: ({ color, size }) => {
            <AntDesign name="home" color={color} size={size}/>
          },
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="MeusProdutos"
        component={MyProducts}
        options={{
          tabBarIcon: ({ color, size }) => {
            <AntDesign name="tags" color={color} size={size} />
          },
          tabBarLabel: "Meus produtos",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes
