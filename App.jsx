import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/ChecksScreens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D8900',
  },
});
