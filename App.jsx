import "react-native-gesture-handler";

import { UserContextProvider } from "./src/context/UserContext";

// Route context
import Routes from "./src/routes";

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
};
