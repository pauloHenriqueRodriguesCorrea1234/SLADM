import {
  Conteiner,
  ViewInput,
  Input,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  NotFoundText,
  ViewNotFound,
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

  /* Assim que o aplicativo for carregado, essa função retornará todos os
   * produtos que estão disponíveis para serem comercializados
   */
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
    isLoading(false)
  }

  // Esse useEffect é executado ao abrir o aplicativo
  useEffect(() => {
    listAllProducts()
    exitApp()
  }, [])

  // Esse useEffect é usado para monitorar o filtro de pesquisa de um produto
  useEffect(() => {
    if (filter) {
      const filteredProducts = products.filter((p) =>
        p.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      )
      setNotFound(false)
      setFilteredProducts(filteredProducts)
      if (filteredProducts.length === 0) setNotFound(true)
    } else {
      setFilteredProducts(products)
    }
  }, [filter])

  /* Evitar que toda vez que um produto for rendenizado cria uma nova função
   * anônima
   */
  function renderItem({ item }) {
    const goToProducersWithThisProduct = () => {
      navigation.navigate("ProducersWithThisProduct", { product: item })
    }
    return (
      <TouchableOpacity onPress={goToProducersWithThisProduct}>
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

      {loading === true ? (
        <ActivityIndicator size={80} color="#fff" />
      ) : (
        notFound === false && (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
        )
      )}
      {notFound === true ? (
        <ViewNotFound>
          <NotFoundText>NENHUM PRODUTO ENCONTRADO</NotFoundText>
        </ViewNotFound>
      ) : null}
    </Conteiner>
  )
}

export default HomeUser
