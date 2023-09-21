import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Library – vector icons
import { Ionicons, MaterialIcons } from "react-native-vector-icons"

// Producer route components
import MyProducts from "../../pages/ProducerScreens/MyProducts"
import HomeProducer from "../../pages/ProducerScreens/HomeProducer"
import AddProduct from "../../pages/ProducerScreens/AddProduct"

// Creation of the Bottom Tab Navigator for producer routes
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

      {/* Route to the producer's home screen (HomeProducer) */}
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

      {/* Route to the "My Products" screen */}
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
