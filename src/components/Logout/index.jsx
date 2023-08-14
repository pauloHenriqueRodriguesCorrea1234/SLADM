import { useNavigation } from "@react-navigation/native"
import { auth } from "../../services/firebaseAuthentication"

const Logout = () => {
  // Obtém o objeto de navegação usando o hook 'useNavigation'
  const navigation = useNavigation()
   // Navega para a tela "Login"
  navigation.navigate("Login")
  // Realiza o logout do usuário usando a função 'signOut' do serviço de autenticação
  auth.signOut()
}

export default Logout