// React hooks
import React, { useState } from "react"

// Styled Components
import {
  Conteiner,
  Input,
  ViewProducer,
  Touchable,
  TextProducer,
  TextCadastrar,
  AlertStyle,
  Switch,
} from "./styles"

// Components
import Logo from "../../../components/Logo"

// Error vector
import errorCodeMessages from "../ConfigError/errorCodeMessages"

// Navigation
import { useNavigation } from "@react-navigation/native"

// Firebase library
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "../../../services/firebaseAuthentication"
import { ref, set } from "firebase/database"
import axios from "axios"

const http = axios.create({
  baseURL: 'https://api-solo-fertil.vercel.app'
})

const SignUp = () => {
  const navigation = useNavigation()

  // User variables
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Producer variables
  const [producer, setProducer] = useState(false)
  const products = useState({})
  const [phone, setPhone] = useState("")

  const auth = getAuth()

  // Function for crate user
  async function createUser() {
    if (name === null || name === "") {
      alert(`Informe seu nome`)
      return
    }
    if (email === null || email === "") {
      alert(`Informe seu e-mail`)
      return
    }
    if (password === null || password === "") {
      alert(`Informe sua senha`)
      return
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const users = data.user.uid

          // Checks if the user is a producer
          if (producer === true) {
            if (phone === null || phone === "") {
              alert("Informe seu telefone")
              return
            } else {
              // Sending data to firebase
              set(ref(db, "producer/" + users), {
                // Producer data
                username: name,
                email: email,
                producer: producer,
                phone: phone,
                products: products,
              })

            }
          } else {
            set(ref(db, "user/" + users), {
              // User data
              username: name,
              email: email,
              password: password,
            })
          }

          alert("Usuário cadastrado com sucesso!")
          navigation.navigate("Login")
          setName("")
          setEmail("")
          setPassword("")
          setProducer(false)
          setPhone("")
        })
        .catch((error) => {
          const errorMessage =
            errorCodeMessages[error.code] ||
            "Erro ao efetuar o cadastramento. Tente novamente mais tarde."
          AlertStyle.alert(errorMessage)
        })
      http.post('/producers', { name, email, phone }, { validateStatus: status => status < 500 })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }

  return (
    <Conteiner>
      <Logo />

      <Input
        placeholderTextColor="#FFF"
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="words"
      />

      <Input
        placeholderTextColor="#FFF"
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        placeholderTextColor="#FFF"
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <ViewProducer>
        <TextProducer>Você é um produtor? </TextProducer>

        <Switch
          style={{ alignItems: "flex-start" }}
          trackColor={{ false: "#fff", true: "#d3d3d3" }}
          thumbColor={producer ? "#fff" : "#000"}
          value={producer}
          onValueChange={() => setProducer(!producer)}
        />
      </ViewProducer>

      {producer ? (
        <Input
          placeholder="Telefone"
          placeholderTextColor="#FFF"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          inputMode="tel"
          keyboardType="numeric"
        />
      ) : null}

      <Touchable onPress={() => createUser()}>
        <TextCadastrar>Cadastrar</TextCadastrar>
      </Touchable>
    </Conteiner>
  )
}

export default SignUp
