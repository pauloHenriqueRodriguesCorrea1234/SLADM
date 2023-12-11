import { Conteiner, Text, FlatList, TouchableOpacity } from "./styles"

import { useEffect, useState } from "react"

import { Linking } from 'react-native'

import api from "../../../services/api"

import Card from "./../Card"

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

  const renderItem = (item) => {
    <TouchableOpacity>
      <Card name={producers.name} price={producers.price} onPrees={() => getInTouch()} />
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
        <Text>Nenhum produtor comercializa {product.name} ainda</Text>
      )}
    </Conteiner>
  )
}

export default ProducersWithThisProduct
