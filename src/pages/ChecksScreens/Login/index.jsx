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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebaseAuthentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWors] = useState("");

  // Função para logar e verificar se o usuario existe
   async function verifiUser() {
     await signInWithEmailAndPassword(auth, email, passWord)
      .then(() => {})
      .catch((error) => console.log(error.message));

    // limpa os inputs caso tudo de certo
    setEmail("");
    setPassWors("");
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
        onChangeText={(text) => setPassWors(text)}
      />

      {/* Verifica se o campo de email e senha foi preenchido se não estiver o botão de login é desabilitado*/}
      {email === "" || passWord === "" ? (
        <TouchableOpacity style={styles.touchable} disabled={true}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={() => verifiUser}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.touchableWitOutStyle}>
        <Text>Forgot your passWord?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp", { screen: "SignUp" })}
        style={styles.touchableWitOutStyle}
      >
        <Text>SIGN UP</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    justifyContent: "center",
    height: 50,
    margin: 20,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  viewError: {},
  textError: {},
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
