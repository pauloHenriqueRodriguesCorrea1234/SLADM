import { ActivityIndicator, TouchableOpacity } from "react-native"

import {
  Conteiner,
  ViewInput,
  Input,
  NotFaundText,
  ViewNotFaund,
  ScrollView,
} from "./styles"

// React States
import { useEffect, useState } from "react"

// Components
import FruitCards from "../FruitCards"
import exitApp from "../BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

import { useNavigation } from "@react-navigation/native"
import api from '../../services/api'

const Body = () => {

  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFaund, setNotFaund] = useState(false)
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      isLoading(true)
      const response = await api.get('/products')
      const { products } = response.data
      console.log(products)
      setProducts(products)
      isLoading(false)
    })()
    exitApp()
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      // Checks if anything that was typed exists in the object array
      const filteredProducts = itens.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )

      // If filteredProducts equals 0 no products were found
      if (filteredProducts.length == 0) {
        setNotFaund(true)
        setProducts(filteredProducts)
      } else {
        setNotFaund(false)
        setProducts(filteredProducts)
      }
    }
  }, [filter])

  return (
    <Conteiner>
      <ViewInput>
        <Input
          placeholderTextColor="#fff"
          placeholder="Escreva o nome do produto"
          value={filter}
          onChangeText={setFilter}
          textAlign="left"
        />
        <Icon name="search" size={30} color={"#fff"} />
      </ViewInput>

      {loading && <ActivityIndicator />}

      {notFaund == true ? (
        <ViewNotFaund>
          <NotFaundText>PRODUTO NÃO ENCONTRADO</NotFaundText>
        </ViewNotFaund>
      ) : (
        notFaund == false
      )}

      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item._id}>
              <FruitCards name={item.name} img={item.imageURL} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Conteiner>
  )
}

export default Body
