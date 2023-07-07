import { Alert, BackHandler } from "react-native";

export const ExitApp = () => {
  const backAction = () => {
    console.log("Saindo...");
    Alert.alert("Sair", "Deseja realmente sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
};
