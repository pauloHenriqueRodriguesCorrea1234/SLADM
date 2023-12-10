import { NavigationContainer } from "@react-navigation/native"
import StackRoutes from "./Stack.routes"

// Main navigation component that encompasses all routes for both the user and the producer
const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export default Routes
