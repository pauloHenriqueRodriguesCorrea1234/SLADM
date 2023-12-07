import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Library – vector icons
import { Ionicons, MaterialIcons } from "react-native-vector-icons";

// Producer route components
import MyProducts from "../../pages/ProducerScreens/MyProducts";
import HomeProducer from "../../pages/ProducerScreens/HomeProducer";

// Creation of the Bottom Tab Navigator for producer routes
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="MeusProdutos"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#d1d1d1",
        tabBarStyle: {
          backgroundColor: "#006400",
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
  );
};

export default TabRoutes;
