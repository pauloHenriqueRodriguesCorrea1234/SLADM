import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../../components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWors] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

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

      {/* Se errorLogin for verdadeiro entra nesta condição,
            se o email ou senha não existir exibe uma mensagem,
            se não não exibe nada.
            */}
      {errorLogin === true ? (
        <View style={styles.viewError}>
          <Text style={styles.textError}>Ivalid e-mail or password</Text>
        </View>
      ) : (
        <View />
      )}

      {/* Verifica se o campo de email e senha foi preenchido se não estiver 
            o botão de login é desabilitado
            */}
      {email === "" || passWord === "" ? (
        <TouchableOpacity style={styles.touchable} disabled={true}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.touchableWitOutStyle}>
        <Text>Forgot your passWord?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#4D8900",
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
     marginTop: "11.5%"
  }
});

export default Login;
