import { StyleSheet, Text, View } from "react-native";
import Footer from "../../../components/Footer";
const HomeUser = () => {
  return (
    <View style={styles.conteiner}>
      <Text>User routes</Text>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#4d8900",
  }
});

export default HomeUser;
