import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  View,
} from "react-native";

import Logo from "../../../components/Logo";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [producert, setProducer] = useState(false);
  const [phone, setPhone] = useState("");
  const auth = getAuth();

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        // 1 Enviar dados para o firebase

        // 2 Fazer verificação se o usuário é um produtor ou não

        alert("Usuário cadastrado com sucesso!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/invalid-email") {
          alert("Email invalido");
          return;
        }
        if (error.code === "auth/internal-error") {
          alert(error.code);
          return;
        }
        if (error.code === "auth/weak-password") {
          alert("Senha invalida");
          return;
        } else {
          alert("Ops... Alguma coisa deu errado!");
          return;
        }
      });

    setName("");
    setEmail("");
    setPassword("");
    setProducer(false);
    setPhone("");
  }

  /* async function createUser() {
  try { try susbstitui o .then
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // 1. Send data to Firebase
    // 2. Check if user is a producer or not

    alert("User successfully registered!");
    navigation.navigate("Login");
  } catch (error) {
    switch (error.code) { Acho que o switch deixa mais eficiente
      case "auth/invalid-email":
        alert("Invalid email");
        break;
      case "auth/internal-error":
        alert(error.code);
        break;
      case "auth/weak-password":
        alert("Weak password");
        break;
      default:
        alert("Something went wrong!");
        break;
    }
  }

  setName("");
  setEmail("");
  setPassword("");
  setProducer(false);
  setPhone("");
}
 */

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#008000" }}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <View style={styles.viewProducer}>
        <Text style={styles.textProducer}>Você é um produtor? </Text>

        <Switch
          style={{ alignItems: "flex-start" }}
          trackColor={{ false: "#777", true: "#8bf" }}
          thumbColor={producert ? "#00f" : "#444"}
          value={producert}
          onValueChange={() => setProducer(!producert)}
        />
      </View>

      {producert ? (
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#FFF"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      ) : (
        <View />
      )}

      <TouchableOpacity style={styles.touchable} onPress={() => createUser()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  viewProducer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textProducer: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SignUp;
