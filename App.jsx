import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
