// States
import { useContext, useState } from "react"

// Styles
import {
  Conteiner,
  Input,
  Touchable,
  TouchableWitOutStyle,
  Text,
  AlertStyle,
} from "./styles"

// Components
import Logo from "../../../components/Logo"

// ...
import { UserContext } from "../../../context/UserContext"

// Error vector
import errorCodeMessages from "../ConfigError/errorCodeMessages"

// Navigation
import { useNavigation } from "@react-navigation/native"

// Firebase library
import { signInWithEmailAndPassword } from "firebase/auth"
import { child, get, getDatabase, ref } from "firebase/database"
import { auth } from "../../../services/firebaseAuthentication"

const database = getDatabase()

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [passWord, setPassWord] = useState("")
  const { setToken, setUserEmail, setIsProducer } = useContext(UserContext)

  // Checks whether the user is a producer or not
  const goToHome = (isProducer) => {
    if (isProducer === true) {
      navigation.navigate("ProducerDrawerRoutes")
    } else {
      navigation.navigate("UserDrawerRoutes")
    }
  }

  // Function to login and check if the user exists
  const verifyUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        passWord
      )

      const { _tokenResponse } = userCredential
      const { userEmail = email, idToken } = _tokenResponse
      setToken(idToken)
      setUserEmail(userEmail)

      const uid = userCredential.user.uid
      const snapshot = await get(
        child(ref(database), `user/${uid}` && `producer/${uid}`)
      )
      const isProducer = snapshot.exists() ? snapshot.val().producer : false
      setIsProducer(isProducer)
      goToHome(isProducer)

      // Clear the inputs
      setEmail("")
      setPassWord("")
    } catch (error) {
      const errorMessage =
        errorCodeMessages[error.code] ||
        "Erro ao efetuar login. Tente novamente mais tarde."
      AlertStyle.alert(errorMessage)
      setEmail("")
      setPassWord("")
    }
  }

  // Go to registration screen
  const goToSignUp = () => {
    navigation.navigate("SignUp")
    setEmail("")
    setPassWord("")
  }

  return (
    <Conteiner>
      <Logo />

      <Input
        placeholderTextColor="#FFF"
        placeholder="Informe seu E-mail"
        type="text"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder={"Informe sua senha"}
        autoCapitalize="none"
        value={passWord}
        onChangeText={setPassWord}
      />

      <Touchable onPress={() => verifyUser()}>
        <Text>Logar</Text>
      </Touchable>

      <TouchableWitOutStyle onPress={goToSignUp}>
        <Text style={{ color: "#fff" }}>Cadastrar</Text>
      </TouchableWitOutStyle>
    </Conteiner>
  )
}

export default Login
