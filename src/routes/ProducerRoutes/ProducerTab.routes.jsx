import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons, MaterialIcons } from "react-native-vector-icons"

import MyProducts from "../../pages/ProducerScreens/MyProducts"
import HomeProducer from "../../pages/ProducerScreens/HomeProducer"

const Tab = createBottomTabNavigator()

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeProducer"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d3d3d3",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#b06c49",
        },
      }}
    >
      <Tab.Screen
        name="HomeProducer"
        component={HomeProducer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="MeusProdutos"
        component={MyProducts}
        options={{
          title: "MEUS PRODUTOS",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-books" color={color} size={size} />
          ),
          tabBarLabel: "Meus produtos",
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes
