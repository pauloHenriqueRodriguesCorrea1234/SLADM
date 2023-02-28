import { StyleSheet, Text, View } from "react-native";
import Footer from "../../../components/Footer";

const HomeUser = () => {
  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.title}>Producer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#008000",
  },
  conteinerTitle: {
    marginTop: 100,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: ''
  },
});

export default HomeUser;
