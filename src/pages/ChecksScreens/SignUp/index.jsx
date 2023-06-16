import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  View,
  Alert,
} from "react-native";

import Logo from "../../../components/Logo";

import errorCodeMessages from "../ConfigError/errorCodeMessages";

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
    if (name === null || name === "") {
      alert(`Informe seu nome`);
      return;
    }
    if (email === null || email === "") {
      alert(`Informe seu e-mail`);
      return;
    }
    if (password === null || password === "") {
      alert(`Informe sua senha`);
      return;
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const users = data.user.uid;

          // Verifica se o usuário é um produtor
          if (producer === true) {
            if (phone === null || phone === "") {
              alert("Informe seu telefone");
              return;
            } else {
              //Enviando dados para o firebase
              set(ref(db, "producer/" + users), {
                // Dados do produtor
                username: name,
                email: email,
                password: password,
                producer: producer,
                phone: phone,
              });
            }
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
          setName("");
          setEmail("");
          setPassword("");
          setProducer(false);
          setPhone("");
        })
        .catch((error) => {
          const errorMessage =
            errorCodeMessages[error.code] ||
            "Erro ao efetuar o cadastramento. Tente novamente mais tarde.";
          Alert.alert(errorMessage);
        });
    }
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

// Se o e-mail não terminar com '@gmail.com'ou '@outlook.com'ou '@yahoo.com' ele dará um alerta para colocar o e-mail corretamente
/* if (!email.includes('@gmail.com') && !email.includes('@outlook.com') && !email.includes('@yahoo.com')) {
  alert('Informe o seu e-mail corretamente');
} */
