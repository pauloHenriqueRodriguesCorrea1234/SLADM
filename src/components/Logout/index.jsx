import { useNavigation } from "@react-navigation/native"
import { auth } from "../../services/firebaseAuthentication"

const Logout = () => {
  const navigation = useNavigation()
  navigation.navigate("Login")
  auth.signOut()
}

export default Logout
