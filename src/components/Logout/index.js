import { useNavigation } from "@react-navigation/native"
import { getAuth, signOut } from "firebase/auth"

export default logout = () => {
  const navigation = useNavigation()

  const auth = getAuth()
  signOut(auth)
    .then(() => {
      navigation.popToTop()
      auth.signOut()
      alert("Usuário deslogado com sucesso!")
    })
    .catch((error) => {
      alert("Erro ao desconectar")
      console.log(error)
    })
}
