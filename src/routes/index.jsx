import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./Stack.routes";

// Componente de navegação principal que engloba todas as rotas
const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
