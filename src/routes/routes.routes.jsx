import { NavigationContainer } from '@react-navigation/native'
import DrawerRoutes from './Drawer.routes'
import StackRoutes from './Stack.routes'

const Routes1 = () => {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}

export default Routes1