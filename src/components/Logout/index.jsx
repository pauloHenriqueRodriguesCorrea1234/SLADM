import { useNavigation } from "@react-navigation/native"
import { auth } from "../../services/firebaseAuthentication"

export default logout = () => {
  const navigation = useNavigation()
  navigation.popToTop();
  auth.signOut()
}
