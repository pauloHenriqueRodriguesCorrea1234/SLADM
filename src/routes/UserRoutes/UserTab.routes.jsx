import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeProducer from '../../pages/ProducerScreens/HomeProducer'

const Tab = createBottomTabNavigator()

const UserTabRoutes = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="HomeUser"
            component={HomeProducer}
            />
        </Tab.Navigator>
    )
}

export default UserTabRoutes;
