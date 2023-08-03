import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


import { Conteiner, ViewInput, Input} from './style'

const MyProducts = () => {
  const Search = () => {
    alert("FIME");
  };

  return (
    <Conteiner>
      <ViewInput>
        <Input
          placeholderTextColor="#000"
          placeholder="Escreva o nome do produto"
        />
        <TouchableOpacity onPress={Search}>
          <Ionicons style={styles.icon} name="search" />
        </TouchableOpacity>
      </ViewInput>

    </Conteiner>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 20,
    color: "#000",
  },
  addProduct: {
    fontSize: 35,
  },
});

export default MyProducts;
