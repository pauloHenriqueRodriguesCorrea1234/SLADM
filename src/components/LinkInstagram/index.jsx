import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Linking } from "react-native"

const Instagram = () => {
  // Define um estado usando o hook 'useState'
  const LinkInstagram = useState([
    // Abre a URL do Instagram ao criar o estado
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/"),
  ])

  // Obtém o objeto de navegação usando o hook 'useNavigation'
  const navigation = useNavigation()
  // Navega para a tela "Home"
  navigation.navigate("Home")
}

export default Instagram
