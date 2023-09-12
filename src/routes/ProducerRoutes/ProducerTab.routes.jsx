import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons, MaterialIcons, Entypo } from "react-native-vector-icons"

import MyProducts from "../../pages/ProducerScreens/MyProducts"
import HomeProducer from "../../pages/ProducerScreens/HomeProducer"
import AddProduct from "../../pages/ProducerScreens/AddProduct"

// Criação do Bottom Tab Navigator para as rotas do produtor
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

      {/* Rota para a tela de início do produtor (HomeProducer) */}
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

      {/* <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Adicionar produto",
        }}
      /> */}

      {/* Rota para a tela "Meus Produtos" (MyProducts) */}
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
