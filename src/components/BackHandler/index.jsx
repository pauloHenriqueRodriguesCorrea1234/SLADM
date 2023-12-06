import { Alert, BackHandler } from "react-native"

const exitApp = () => {
  // Creates an action when the return button is pressed.
  const backAction = () => {
    console.log("Saindo...")
    // Shows an alert to confirm exiting the app.
    Alert.alert("Sair", "Deseja realmente sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ])
    // Returns true indicating that it was treated.
    return true
  }

  // Creates a 'listener' on button press
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  )

  // Returns the function that removes the 'listener' when the component is 'unmounted'
  return () => backHandler.remove()
}

export default exitApp
