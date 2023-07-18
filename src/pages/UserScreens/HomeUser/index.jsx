import { StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import { useEffect, useState, ScrollView } from "react";
import { itens } from "../../../../data/itens.json";
import { Conteiner, TitleProduct, Input, ViewInput } from "./styles";

import FruitCards from "../../../components/FruitCards";
import ExitApp from "../../../components/BackHandler";

const HomeUser = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itens);
    ExitApp();
  }, []);

  const Search = () => {
    alert("...");
  };

  return (
    <Conteiner>
      <TitleProduct>Produtos</TitleProduct>
      <ViewInput>
        <Input
          placeholderTextColor="#000"
          placeholder="Escreva o nome do produto"
        />
        <TouchableOpacity onPress={Search}>
          <Ionicons style={styles.icon} name="search" />
        </TouchableOpacity>

        {products.length > 0 && (
          <ScrollView>
            {products.map((item) => (
              <TouchableOpacity key={item.id}>
                <FruitCards
                  productName={item.nomeProduto}
                  coverUrl={item.coverUrl}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </ViewInput>
    </Conteiner>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 20,
  },
});

export default HomeUser;
