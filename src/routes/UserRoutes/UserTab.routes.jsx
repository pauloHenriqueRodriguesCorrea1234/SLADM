import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Icon from "react-native-vector-icons/Ionicons"

import HomeProducer from "../../pages/ProducerScreens/HomeProducer"

// Criação do Bottom Tab Navigator para as rotas do usuário
const Tab = createBottomTabNavigator()

const UserTabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeUser"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#b06c49",
        }
      }}
    >

      {/* Rota para a tela de início do usuário (HomeProducer) */}
      <Tab.Screen
        name="HomeUser"
        component={HomeProducer}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarIcon: ({size, color}) =>(
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default UserTabRoutes
