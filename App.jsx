import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/ChecksScreens/Login';
import SignUp from './src/pages/ChecksScreens/SignUp';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar  barStyle="light-content" />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
