import { Alert, BackHandler } from "react-native";

const exitApp = () => {
  const backAction = () => {
    console.log("Saindo...");
    Alert.alert("Sair", "Deseja realmente sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ])
    return true;
  }
  
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  // Returns the function that removes the 'listener' when the component is 'unmounted'
  return () => backHandler.remove();
}

export default exitApp;
