import { StatusBar } from "expo-status-bar"
import 'react-native-gesture-handler';
import { Conteiner } from "./AppStyle"
import { UserContextProvider } from './src/context/UserContext'
import Routes1 from "./src/routes/routes.routes";
import Routes from "./src/routes";
export default function App() {
  return (
    <UserContextProvider>
      <Conteiner>
        <StatusBar hidden />
          <Routes1/>
      </Conteiner>
    </UserContextProvider>
  );
}
