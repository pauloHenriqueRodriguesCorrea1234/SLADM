// Styled Components
import {
  Conteiner,
  ViewInput,
  Input,
  NotFaundText,
  ViewNotFaund,
  FlatList
} from "./styles"

// React States
import { useEffect, useState } from "react"

// Components
import FruitCards from '../../../components/FruitCards'
import exitApp from "../../../components/BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

import api from "../../../services/api"

const HomeProducer = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFaund, setNotFaund] = useState(false)

  async function listAllProducts() {
    const response = await api.get('/products', {
      validateStatus: (status) => status < 500,
    })

    if (response.status === 200) {
      const { products } = response.data
      setProducts(products)
    }
  }

  useEffect(() => {
    listAllProducts()
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

export default HomeProducer
