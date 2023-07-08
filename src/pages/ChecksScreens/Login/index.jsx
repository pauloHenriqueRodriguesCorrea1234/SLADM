// States
import { useContext, useState } from "react";

// Navigation
import { StackActions } from "@react-navigation/native";

// Components
import {
  Alert,
  Text,
} from "react-native";

import { Conteiner, Input, Touchable, TouchableWitOutStyle } from './styles'

// Componente com a logo do projeto
import Logo from "../../../components/Logo";
import errorCodeMessages from "../ConfigError/errorCodeMessages";

// Biblioteca firabase
import { signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { UserContext } from "../../../context/UserContext";
import { auth } from "../../../services/firebaseAuthentication";

const database = getDatabase();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const { setToken, setUserEmail, setIsProducer } = useContext(UserContext);

  // Verifica se o usuário é um produtor ou não
  const goToHome = (isProducer) => {
    if (isProducer === true) {
      navigation.dispatch(StackActions.push("HomeProducer"));
    } else {
      navigation.dispatch(StackActions.push("HomeUser"));
    }
  };

  // Função para logar e verificar se o usuario existe
  const verifyUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        passWord
      );

      const { _tokenResponse } = userCredential;
      const { userEmail = email, idToken } = _tokenResponse;
      setToken(idToken);
      setUserEmail(userEmail);

      const uid = userCredential.user.uid;
      const snapshot = await get(
        child(ref(database), `user/${uid}` && `producer/${uid}`)
      );
      const isProducer = snapshot.exists() ? snapshot.val().producer : false;
      setIsProducer(isProducer);
      goToHome(isProducer);

      // Limpa os inputs
      setEmail('')
      setPassWord('')
    } catch (error) {
      console.log(error);
      const errorMessage =
        errorCodeMessages[error.code] ||
        "Erro ao efetuar login. Tente novamente mais tarde.";
      Alert.alert(errorMessage); 
    }
  };

  // Vai para tela de cadastro
  const goToSignUp = () => {
    navigation.navigate("SignUp");
    setEmail("");
    setPassWord("");
  };

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
      />

      <Input
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder={"Informe sua senha"}
        value={passWord}
        onChangeText={setPassWord}
      />

      <Touchable onPress={() => verifyUser()}>
        <Text>Logar</Text>
      </Touchable>

      <TouchableWitOutStyle
        onPress={goToSignUp}
      >
        <Text style={{ color: "#fff" }}>Cadastrar</Text>
      </TouchableWitOutStyle>
    </Conteiner>
  );
};

export default Login;
