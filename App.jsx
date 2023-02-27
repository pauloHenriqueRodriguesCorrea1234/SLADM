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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
