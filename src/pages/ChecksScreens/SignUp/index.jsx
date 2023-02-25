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

import { useNavigation } from "@react-navigation/native";

// Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Realtime Database
import { db } from "../../../services/firebaseAuthentication";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [producer, setProducer] = useState(false);
  const [phone, setPhone] = useState("");
  const auth = getAuth();

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const users = data.user.uid;

        // Verifica se o usuário é um produtor
        if (producer === true) {
          //Enviando dados para o firebase
          set(ref(db, "producer/" + users), {
            // Dados do produtor
            username: name,
            email: email,
            password: password,
            producer: producer,
            phone: phone,
          });
        } else {
          set(ref(db, "user/" + users), {
            // Dados do usuário
            username: name,
            email: email,
            password: password,
          });
        }

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
          thumbColor={producer ? "#00f" : "#444"}
          value={producer}
          onValueChange={() => setProducer(!producer)}
        />
      </View>

      {producer ? (
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
