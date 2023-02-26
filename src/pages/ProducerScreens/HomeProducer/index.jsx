import { View, Text, StyleSheet} from "react-native";

const HomeProducer = () => {
  return (
    <View style={styles.conteiner}>
      <Text>Producer routes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex:1,
    backgroundColor:"#008000",
    alignContent: 'center',
    justifyContent:"center"
  }
})
export  default HomeProducer;