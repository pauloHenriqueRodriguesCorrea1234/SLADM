import { StyleSheet, Text, View } from "react-native";
import Footer from "../../../components/Footer";


const Home = () => {

  return (
    <View style={styles.conteiner}>
      <Text>User routes</Text>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex:1,
    backgroundColor:"#008000"
  }
})

export default Home;
