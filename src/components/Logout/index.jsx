import { useNavigation } from "@react-navigation/native"
import { auth } from "../../services/firebaseAuthentication"

const Logout = () => {
  // Get the navigation object using the 'useNavigation' hook
  const navigation = useNavigation()
  // Navigate to the "Login" screen
  navigation.navigate("Login")
  // Logs the user out using the 'signOut' function of the authentication service
  auth.signOut()
}

export default Logout