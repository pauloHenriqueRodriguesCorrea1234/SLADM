import "react-native-gesture-handler"

// Styles componets
import { Conteiner } from "./AppStyle"

import { UserContextProvider } from "./src/context/UserContext"

// Route context
import Routes from "./src/routes"
import AddProduct from "./src/pages/ProducerScreens/AddProduct"
import HomeProducer from './src/pages/ProducerScreens/HomeProducer'
import MyProducts from './src/pages/ProducerScreens/MyProducts'

export default function App() {
  return (
    // Wrapper for user context. Wrapper is a function intended to call one or more functions.
    <UserContextProvider>
      {/* <Conteiner> */}
        <Routes />
        {/* <MyProducts /> */}
        {/* <AddProduct/> */}
      {/* </Conteiner> */}
    </UserContextProvider>
  )
}
