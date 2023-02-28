import { StyleSheet, Text, View } from "react-native";
const HomeUser = () => {
  return (
    <View style={styles.conteiner}>
      <Text>User routes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#008000",
  }
});

export default HomeUser;
