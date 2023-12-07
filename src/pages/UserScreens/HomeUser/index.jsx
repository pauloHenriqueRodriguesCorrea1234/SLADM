import {
  Conteiner,
  ViewInput,
  Input,
  NotFaundText,
  ViewNotFaund,
  ActivityIndicator,
  FlatList
} from "./styles"

// React States
import { useEffect, useState } from "react"

// Components
import FruitCards from "../../../components/FruitCards"
import exitApp from "../../../components/BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

import { useNavigation } from "@react-navigation/native"

import api from '../../../services/api'

const HomeUser = () => {

  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  // Arrumar o filter, pois quando apagamos todas as letras 
  const [filter, setFilter] = useState("")
  const [notFaund, setNotFaund] = useState(false)
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    ; (async () => {
      isLoading(true)
      const response = await api.get('/products')
      const { products } = response.data

      setProducts(products)
      isLoading(false)
    })()
    exitApp()
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      // Checks if anything that was typed exists in the object array
      const filteredProducts = products.filter((p) =>
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


  function renderItem({ item }) {
    return <FruitCards img={item.imageURL} name={item.name} />
  }

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

      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />


    </Conteiner>
  )
}

export default HomeUser
