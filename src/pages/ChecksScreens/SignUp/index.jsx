import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Logo from "../../../components/Logo";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../services/firebaseAuthentication";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [producert, setProducer] = useState(false)

  const handleAuthError = (error) => {
    if (error.code) {
      switch (error.code) {
        case "auth/weak-password":
          alert("Senha muito fraca");
          break;

        case "auth/email-already-in-use":
          alert("Este e-mail já está em uso por outro usuário");
          break;

        case "auth/wrong-password":
          alert("Senha incorreta");
          break;

        case "auth/invalid-email":
          alert("Formato de email invalido");

        default:
          alert("Ops... Aconteceu algum erro");
      }
    }
  };

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password, name)
      .then((data) => {
        const user = data.user;

        user.sendEmailVerification()
          .then((r) => alert("Email de confirmação enviado"))
          .catch((err) => alert("Ops... Aconteceu algum erro"));
      })
      .catch(handleAuthError);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#008000" }}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Informe seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Informe seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Informe sua senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.touchable} onPress={() => createUser()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SignUp;
