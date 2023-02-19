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
import { firebaseApp } from "../SignUp"

const authStatuses = [
  'auth/wrong-password',
  'auth/user-not-found',
  'auth/invalid-email',
];

/* const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  // Função para logar e verificar se o usuario existe
  async function verifiUser() {
    await signInWithEmailAndPassword(auth, email, passWord)
      .then((value) => {
        alert(`Usuario Logado: ${value.user.uid}`);
        navigation.navigate('SignUp');
      })
      .catch((error) => alert(error.code));

    // limpa os inputs caso tudo de certo
    setEmail("");
    setPassWord("");
  } */

  const Login = () => {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const navigation = useNavigation();
  
    const verifiUser = async () => {
      try {
        const auth = getAuth(firebaseApp); // obtém a instância de autenticação do Firebase com as configurações previamente definidas
        const userCredential = await signInWithEmailAndPassword(auth, email, passWord); // tenta realizar o login utilizando o email e a senha fornecidos
        const { user } = userCredential; // extrai o usuário do resultado da autenticação
        const idToken = await user.getIdToken(); // obtém o token de autenticação do usuário
        localStorage.setItem('token', idToken); // salva o token de autenticação no armazenamento local
        navigation.navigate('SignUp'); 
      } catch (error) {
        const { code } = error; // extrai o código de erro do objeto de erro retornado
  
        if (authStatuses.includes(code)) { // se o código de erro estiver no array authStatuses
          setErrorMessage('Credenciais inválidas'); // define a mensagem de erro como "Credenciais inválidas"
        } else {
          console.log(code); // imprime o código de erro no console
        }
      }
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

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.touchableWitOutStyle}
      >
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
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    justifyContent: "center",
    height: 50,
    margin: 20,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
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
