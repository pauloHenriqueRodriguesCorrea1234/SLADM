// Styled Components
import {
  Conteiner,
  ViewInput,
  Input,
  FlatList,
  ViewNotFound,
  NotFoundText,
} from "./styles"

// React States
import { useEffect, useState } from "react"

// Components
import FruitCards from "../../../components/FruitCards"
import exitApp from "../../../components/BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

import api from "../../../services/api"

const HomeProducer = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFound, setNotFound] = useState(false)

  async function listAllProducts() {
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
    exitApp()
  }, [])

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

      {notFound == true ? (
        <ViewNotFound>
          <NotFoundText>PRODUTO NÃO ENCONTRADO</NotFoundText>
        </ViewNotFound>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </Conteiner>
  )
}

export default HomeProducer
