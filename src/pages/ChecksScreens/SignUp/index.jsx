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

import { useNavigation } from "@react-navigation/native";

// Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Realtime Database
import { db } from "../../../services/firebaseAuthentication";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const navigation = useNavigation();
  
  // States inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [producer, setProducer] = useState(false);
  const [phone, setPhone] = useState("");
  
  // Authentication
  const auth = getAuth();

  async function createUser() {
    // Verifica se os campos estão preenchidos
    if (name === null || name === "") {
      Alert.alert(`Informe seu nome`);
      return;
    }
    if (email === null || email === "") {
      Alert.alert(`Informe seu e-mail`);
      return;
    }
    if (password === null || password === "") {
      Alert.alert(`Informe sua senha`);
      return;
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const users = data.user.uid;

          // Verifica se o usuário é um produtor
          if (producer === true) {
            // Verifica se o telefone foi informado
            if (phone === null || phone === "") {
              Alert.alert("Informe seu telefone");
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

          Alert.alert("Usuário cadastrado com sucesso!");
          navigation.navigate("Login");
          setName("");
          setEmail("");
          setPassword("");
          setProducer(false);
          setPhone("");
        })

        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            Alert.alert(
              "Já existi uma conta com o endereço de email fornecido."
            );
            return;
          }

          if (error.code === "auth/invalid-email") {
            Alert.alert("Email invalido");
            return;
          }

          if (error.code === "auth/weak-password") {
            Alert.alert("Sua senha deve ter pelo menos 6 caracteres");
            return;
          }
          if (error.code === "auth/email-already-exists") {
            Alert.alert("O e-mail fornecido já está em uso.");
            return;
          }
          if (error.code === "auth/invalid-password") {
            Alert.alert(
              "A senha é inválida, precisa ter pelo menos 6 caracteres."
            );
            return;
          }

          if (error.code === "auth/weak-password") {
            Alert.alert("A senha é muito fraca.");
            return;
          } else {
            Alert.alert("Ops... Alguma coisa deu errado!");
            return;
          }
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
        keyboardType="email-address"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
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
          keyboardType="phone-pad"
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
