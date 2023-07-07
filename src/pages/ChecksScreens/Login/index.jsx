// States
import { useContext, useState } from "react";

// Navigation
import { StackActions } from "@react-navigation/native";

// Components
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    <View style={styles.conteiner}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Informe seu E-mail"
        type="text"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder={"Informe sua senha"}
        value={passWord}
        onChangeText={setPassWord}
      />

      <TouchableOpacity style={styles.touchable} onPress={() => verifyUser()}>
        <Text>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goToSignUp}
        style={styles.touchableWitOutStyle}
      >
        <Text style={{ color: "#fff" }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#008000",
  },
  input: {
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
    height: 50,
    margin: 10,
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
  },
  touchable: {
    alignItems: "center",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "5%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 14,
  },
  touchableWitOutStyle: {
    alignItems: "center",
    marginTop: "11.5%",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 25,
    height: 30,
  },
});

export default Login;
