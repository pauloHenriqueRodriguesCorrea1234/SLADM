import {
  Conteiner,
  Text,
  FlatList,
  TouchableOpacity,
  ViewNotFound,
} from "./styles"

import { useEffect, useState } from "react"

import { Linking } from "react-native"

import api from "../../../services/api"

import Card from "../../../components/Card"

const ProducersWithThisProduct = ({ route }) => {
  const { product } = route.params
  const [producers, setProducers] = useState([])

  useEffect(() => {
    (async () => {
      const response = await api.get(`/producers/product/${product._id}`)
      const { producers } = response.data
      setProducers(producers)
      console.log(producers)
    })()
  }, [])

  const getInTouch = () => {
    Linking.openURL(`whatsapp://send?phone=${producers.phone}`)
  }

  const renderItem = () => {
    <TouchableOpacity>
      <Card
        name={producers.name}
        price={producers.price}
        onPrees={() => getInTouch()}
      />
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
      ) : (
        <ViewNotFound>
          <Text>
            {product.name}
          </Text>
        </ViewNotFound>
      )}
    </Conteiner>
  )
}

export default ProducersWithThisProduct
