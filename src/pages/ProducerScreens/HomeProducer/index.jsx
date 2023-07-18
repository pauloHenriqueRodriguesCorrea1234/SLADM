import {
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Conteiner, TitleProduct, ViewInput, Input } from './styles'

// React States
import { useEffect, useState } from "react";

// products json
import { itens } from "../../../../data/itens.json";

// Components
import FruitCards from "../../../components/FruitCards";
import ExitApp from "../../../components/BackHandler";

const HomeProducer = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setProducts(itens);
    ExitApp();
  }, []);

  useEffect(() => {
    if (filter) {
      const filteredProducts = itens.filter((p) =>
        p.nomeProduto.toLowerCase().includes(filter.toLowerCase())
      );

      setProducts(filteredProducts);
    } else {
      setProducts(itens);
    }
  }, [filter]);

  return (
    <Conteiner>
      <ViewInput>
        <Input
          placeholderTextColor="#fff"
          placeholder="Escreva o nome do produto"
          value={filter}
          onChangeText={setFilter}
        />
      </ViewInput>

      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards name={item.nomeProduto} img={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Conteiner>
  );
};

export default HomeProducer;
