import "react-native-gesture-handler"

import { StatusBar } from "react-native"

import { UserContextProvider } from "./src/context/UserContext"
// Route context
import Routes from "./src/routes"

export default App = () => {
  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content" backgroundColor="#006400" />
      <Routes />
    </UserContextProvider>
  )
}
