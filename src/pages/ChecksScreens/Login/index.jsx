// States
import { useState } from "react";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Components
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Componente com a logo do projeto
import Logo from "../../../components/Logo";

// Biblioteca firabase
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../../services/firebaseAuthentication";
// import { FirebaseApp } from "../../../services/firebaseAuthentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  // Função para logar e verificar se o usuario existe

  async function verifiUser() {
    try {
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, email, passWord); // Faz o login do usuário com o e-mail e senha fornecidos
      alert(`Usuario Logado: ${uid}`); // Exibe uma mensagem de sucesso e navega para a tela 'Home'
      navigation.navigate("Home");
      setEmail("");
      setPassWord("");
      // Limpa os estados de e-mail e senha para que os campos fiquem vazios
    } catch (error) {
      // Lida com diferentes tipos de erros de autenticação e mostra uma mensagem de erro para um erro especifico
      switch (error.code) {
        case "auth/invalid-email":
          alert("O endereço de e-mail não é válido.");
          break;
        case "auth/user-disabled":
          alert("A conta do usuário foi desativada.");
          break;
        case "auth/user-not-found":
          alert("Não existe uma conta com esse endereço de e-mail.");
          break;
        case "auth/wrong-password":
          alert("Senha inválida.");
          break;
        default:
          alert("Erro ao efetuar login. Tente novamente mais tarde.");
      }
    }
  }

  function GoSignUp() {
    setEmail("");
    setPassWord("");
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.conteiner}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Informe seu E-mail"
        type="text"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder={"Informe sua senha"}
        value={passWord}
        onChangeText={(text) => setPassWord(text)}
      />

      {/* Verifica se o campo de email e senha foi preenchido se não estiver o botão de login é desabilitado*/}
      {email === "" || passWord === "" ? (
        <TouchableOpacity style={styles.touchable} disabled={true}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={() => verifiUser()}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.touchableWitOutStyle}>
        <Text style={{ color: "#fff" }}>Forgot your passWord?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={GoSignUp} style={styles.touchableWitOutStyle}>
        <Text style={{ color: "#fff" }}>SIGN UP</Text>
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
