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
  Alert,
} from "react-native";

// Componente com a logo do projeto
import Logo from "../../../components/Logo";
import errorCodeMessages from "../ConfigError/errorCodeMessages"

// Biblioteca firabase
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../../services/firebaseAuthentication";
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

      const uid = userCredential.user.uid;
      const snapshot = await get(child(ref(database), `user/${uid}` && `producer/${uid}`));
      const isProducer = snapshot.exists() ? snapshot.val().producer : false;
      if (isProducer === true) {
        navigation.navigate("HomeProducer");
        alert('Produtor logado com sucesso')
      } else {
        navigation.navigate("HomeUser");
        alert('Usuário logado com sucesso')
      }

      // Limpa os inputs
      setEmail('');
      setPassWord('');
     } catch (error) {
      const errorMessage = errorCodeMessages[error.code] || 'Erro ao efetuar login. Tente novamente mais tarde.';
      Alert.alert(errorMessage);
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
        keyboardType='email-address'
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
          <Text>Logar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={() => verifiUser()}>
          <Text>Logar</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.touchableWitOutStyle}>
        <Text style={{ color: "#fff" }}>Esquceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
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