import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Linking } from "react-native"

const Instagram = () => {
  const LinkInstagram = useState([
    Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/"),
  ])

  const navigation = useNavigation()
  navigation.navigate("Home")
}

export default Instagram
