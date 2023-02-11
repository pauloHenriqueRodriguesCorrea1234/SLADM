import React, { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Logo from "../../../components/Logo";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../../services/firebaseAuthentication'

const SignUp = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            
        })
        .catch(error => console.log(error))
    }


  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
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
