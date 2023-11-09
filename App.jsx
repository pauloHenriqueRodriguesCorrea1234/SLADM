import "react-native-gesture-handler"

// Styles componets
import { Conteiner } from "./AppStyle"

import { UserContextProvider } from "./src/context/UserContext"

// Route context
import Routes from "./src/routes"
import AddProduct from "./src/pages/ProducerScreens/AddProduct"

export default function App() {
  return (
    // Wrapper for user context. Wrapper is a function intended to call one or more functions.
    <UserContextProvider>
      <AddProduct/>
      {/* <Conteiner>
        <Routes />
      </Conteiner> */}
    </UserContextProvider>
  )
}
