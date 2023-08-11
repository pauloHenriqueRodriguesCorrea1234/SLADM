import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Icon from "react-native-vector-icons/Ionicons"

import HomeUser from "../../pages/UserScreens/HomeUser"

const Tab = createBottomTabNavigator()

const UserTabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeUser"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#b06c49",
        },
      }}
    >
      <Tab.Screen
        name="HomeUser"
        component={HomeUser}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default UserTabRoutes
