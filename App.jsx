<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Routes />
    </View>
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './src/routes';
import SearchBar from './src/components/SearchBar'

export default function App() {
  return (

    <SearchBar />
    // <View style={styles.container}>
    //   <StatusBar  barStyle="light-content" />
    //   <Routes/>
    // </View>
>>>>>>> e8d071b1936455ff8c7b08a433002b17181aea8f
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
