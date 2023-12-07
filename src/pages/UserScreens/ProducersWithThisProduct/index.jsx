import { useEffect, useState } from "react";
import { Conteiner, Text } from "./styles";
import api from "../../../services/api";
import { FlatList, TouchableOpacity } from "react-native";
import FruitCards from "../../../components/FruitCards";

const ProducersWithThisProduct = ({ route }) => {
  const { product } = route.params;
  const [producers, setProducers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await api.get(`/producers/product/${product._id}`);
      const { producers } = response.data;
      setProducers(producers);
      console.log(producers);
    })();
  }, []);

  const renderItem = (item) => {
    <TouchableOpacity>
      <FruitCards name={producers.name} />
    </TouchableOpacity>
  }
  return (
    <Conteiner>
      {producers.length > 0 ? (
        <FlatList
          data={producers}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : <Text>Nenhum produtor comercializa esse produto ainda</Text>}

    </Conteiner>
  )
}

export default ProducersWithThisProduct