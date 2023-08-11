import { Alert, BackHandler } from "react-native"

const ExitApp = () => {
  // Cria uma ação quando o botão de retorno é pressionado.
  const backAction = () => {
    console.log("Saindo...")
    // Mostra um alerta  para confirmação de saída do app.
    Alert.alert("Sair", "Deseja realmente sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ])
    // Retorna true indicando que foi tratado.
    return true
  }

  // Cria um 'ouvinte' ao pressionar o botão 
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  )

  // Retorna a função que remove o 'ouvinte' quando o componente é 'desmontado'
  return () => backHandler.remove()
}

export default ExitApp
