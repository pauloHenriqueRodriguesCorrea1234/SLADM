import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeProducer from "../../pages/ProducerScreens/HomeProducer"

const Tab = createBottomTabNavigator()

const UserTabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeUser"
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
      <Tab.Screen name="HomeUser" component={HomeProducer} />
    </Tab.Navigator>
  )
}

export default UserTabRoutes
