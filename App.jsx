import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Conteiner } from "./AppStyle";
import { UserContextProvider } from "./src/context/UserContext";

import Routes from "./src/routes";

export default function App() {
  return (
    <UserContextProvider>
      <Conteiner>
        <StatusBar hidden />
        <Routes />
      </Conteiner>
    </UserContextProvider>
  );
}
