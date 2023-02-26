import { createDrawerNavigator } from "@react-navigation/drawer";

import Instagram from "./Instagram";
import Logout from "./Logout";

const RoutesDrawer = createDrawerNavigator({
    Instagram,
    Logout
})

export default RoutesDrawer