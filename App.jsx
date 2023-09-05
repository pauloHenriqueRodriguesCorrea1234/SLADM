import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"
import { Conteiner } from "./AppStyle"
import { UserContextProvider } from "./src/context/UserContext"

import Routes from "./src/routes"
import MyProducts from "./src/pages/ProducerScreens/MyProducts"
import HomeProducer from "./src/pages/ProducerScreens/HomeProducer"

export default function App() {
  return (
    // Wrapper para o contexto do usuário. Wrapper é uma função destinada a chamar uma ou mais funções.
    <Conteiner>
    <MyProducts/>
    </Conteiner>
    // <UserContextProvider>
    //     <StatusBar hidden />
    //     <Routes />
    // </UserContextProvider>
  )
}
