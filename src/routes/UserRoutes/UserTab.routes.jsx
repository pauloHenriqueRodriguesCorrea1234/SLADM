import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Icons
import Icon from 'react-native-vector-icons/Entypo'

import HomeProducer from "../../pages/ProducerScreens/HomeProducer"

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
      <Tab.Screen
        name="HomeUser"
        component={HomeProducer}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarIcon: ({size, color}) =>{
            <Icon name="home" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default UserTabRoutes
