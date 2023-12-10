import {
  Conteiner,
  ViewInput,
  Input,
  notFoundText,
  ViewnotFound,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "./styles"

// React States
import { useEffect, useState } from "react"

// Components
import FruitCards from "../../../components/FruitCards"
import exitApp from "../../../components/BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

import { useNavigation } from "@react-navigation/native"

import api from "../../../services/api"

const HomeUser = () => {
  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFound, setNotFound] = useState(false)
  const [loading, isLoading] = useState(false)

  async function listAllProducts() {
    isLoading(true)
    const response = await api.get("/products", {
      validateStatus: (status) => status < 500,
    })

    if (response.status === 200) {
      const { products } = response.data
      setProducts(products)
      setFilteredProducts(products)
    }
  }

  useEffect(() => {
    listAllProducts()
    isLoading(false)
    exitApp()
  }, [])

  useEffect(() => {
    if (filter) {
      const filteredProducts = products.filter((p) =>
        p.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      )

      setNotFound(!filteredProducts)
      setFilteredProducts(filteredProducts)
    } else {
      setFilteredProducts(products)
    }
  }, [filter])

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProducersWithThisProduct", { product: item })
        }
      >
        <FruitCards img={item.imageURL} name={item.name} />
      </TouchableOpacity>
    )
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
      {notFound == true ? (
        <ViewnotFound>
          <notFoundText>PRODUTO NÃO ENCONTRADO</notFoundText>
        </ViewnotFound>
      ) : (
        notFound == false
      )}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </Conteiner>
  )
}

export default HomeUser
