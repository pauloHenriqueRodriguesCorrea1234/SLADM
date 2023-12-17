// Styles Components
import {
  Conteiner,
  ViewInput,
  Input,
  ViewNotFaund,
  NotFaundText,
  TouchableOpacityDetails,
  TouchableOpacityNewProduct,
  FlatList,
} from "./styles"

// Components
import { UserContext } from "../../../context/UserContext"
import FruitCards from "../../../components/FruitCards"
import exitApp from "../../../components/BackHandler"

// API
import api from "../../../services/api"

// Navigation Library
import { useNavigation } from "@react-navigation/native"

// Icons
import { MaterialIcons, Entypo } from "react-native-vector-icons"

// React Components
import { useContext, useEffect, useState } from "react"

const MyProducts = () => {
  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFound, setNotFound] = useState(false)

  const { userEmail } = useContext(UserContext)

  useEffect(() => {
    (async () => {
      const response = await api.get(`/products/producer/${userEmail}`)
      const { products } = response.data
      setProducts(products)
      setFilteredProducts(products)
    })()
    exitApp()
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      )
      if (filteredProducts.length == 0) {
        setNotFound(true)
        setFilteredProducts(filteredProducts)
      } else {
        setNotFound(false)
      }
      setProducts(filteredProducts)
    } else {
      setNotFound(false)
      setFilteredProducts(products)
    }
  }, [filter])

  function renderItem({ item }) {
    return (
      <TouchableOpacityDetails onPress={() => navigation.navigate("Details")}>
        <FruitCards img={item.coverUrl} name={item.productName} />
      </TouchableOpacityDetails>
    )
  }

  function NewProduct() {
    return (
      <TouchableOpacityNewProduct
        activeOpacity={0.2}
        onPress={() => navigation.navigate("AddProduct")}
      >
        <Entypo name="plus" size={30} color={"#000"} />
      </TouchableOpacityNewProduct>
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
        <MaterialIcons name="search" color="#fff" size={30} />
      </ViewInput>

      {notFound ? (
        <ViewNotFaund>
          <NotFaundText>PRODUTO NÃO ENCONTRADO</NotFaundText>
        </ViewNotFaund>
      ) : null}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <NewProduct />
    </Conteiner>
  )
}

export default MyProducts
