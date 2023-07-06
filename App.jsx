import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { UserContextProvider } from './src/context/UserContext'
import Routes from "./src/routes"

export default function App() {
  return (
    <UserContextProvider>
      <View style={styles.container}>
        <StatusBar hidden />
        {/* Comentário teste */}
          <Routes />
      </View>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
