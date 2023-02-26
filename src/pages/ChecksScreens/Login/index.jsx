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
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase, ref, child, get } from "firebase/database";

const database = getDatabase();

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  // Função para logar e verificar se o usuario existe

  const verifiUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, passWord);
  
      // Se o login foi bem-sucedido, obtém o ID do usuário e busca seus dados no banco de dados
      const uid = userCredential.user.uid;
      const snapshot = await get(child(ref(database), `users/${uid}`));
  
      // Verifica se o usuário é produtor ou não e navega até a tela apropriada
      const isProducer = snapshot.exists() ? snapshot.val().producer : false;
      let navigateToScreen;
      if (isProducer) {
        navigateToScreen = 'Home';
      } else {
        navigateToScreen = 'SignUp';
      }
  
      // Limpa os estados de e-mail e senha para que os campos fiquem vazios
      setEmail('');
      setPassWord('');
  
      // Navega para a tela apropriada
      navigation.navigate(navigateToScreen);
    } catch (error) {
      // Trata diversos erros de autenticação e exibe uma mensagem de erro
      handleError(error);
    }
  };
  // Criei uma função separada somente para os erros
  const handleError = (error) => {
    switch (error.code) {
      case 'auth/invalid-email':
        Alert.alert('O endereço de e-mail não é válido.');
        break;
      case 'auth/user-disabled':
        Alert.alert('A conta do usuário foi desativada.');
        break;
      case 'auth/user-not-found':
        Alert.alert('Não existe uma conta com esse endereço de e-mail.');
        break;
      case 'auth/wrong-password':
        Alert.alert('Senha inválida.');
        break;
      default:
        Alert.alert('Erro ao efetuar login. Tente novamente mais tarde.');
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