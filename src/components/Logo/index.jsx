import { Image, StyleSheet, View } from "react-native";

const Logo = () => {
  return (
    <View style={styles.conteiner}>
      
      <Image 
      style={styles.img} 
      source={require("../../assets/img/logo.png")} 
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    marginTop: 20,
  },
  img: {
    width: 270,
    height: "100%",
  },
});

export default Logo;
