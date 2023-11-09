// Navigation Library
import { useNavigation } from "@react-navigation/native"

// Icons
import { MaterialIcons, Entypo } from 'react-native-vector-icons'

// Data
import { myProducts } from '../../../../data/myProducts.json'
import { itens } from "../../../../data/itens.json"

// Styles Components
import { Conteiner, ViewInput, Input, ViewNotFaund, NotFaundText, List, TouchableOpacityDetails, TouchableOpacityNewProduct, ConteinerNewProduct, ViewNewProduct } from './styles'

// React Components
import { useEffect, useState } from "react"

// Components 
import FruitCards from "../../../components/FruitCards"
import ExitApp from "../../../components/BackHandler"
import { FlatList } from "react-native"

const MyProducts = () => {

  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [notFaund, setNotFaund] = useState(false)

  useEffect(() => {
    setProducts(itens)
    ExitApp()
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      // Checks if anything that was typed exists in the object array
      const filteredProducts = myProducts.filter((p) =>
        p.nameProduct.toLowerCase().includes(filter.toLowerCase())
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

  // It is used to not create a new function every time the item is assembled
  function renderItem({ item }) {
    return (
      <TouchableOpacityDetails onPress={() => navigation.navigate("Details")}>
        <FruitCards img={item.coverUrl} name={item.productName} />
      </TouchableOpacityDetails>
    )
  }

  // Used to go to the details screen
  function NewProduct() {
    return (
      <ConteinerNewProduct>
        <ViewNewProduct>
          {
            notFaund == false ?
              <TouchableOpacityNewProduct
                onPress={() => navigation.navigate("AddProduct")}>
                <Entypo name="plus" size={20} color={'#000'} />
              </TouchableOpacityNewProduct> : null
          }
        </ViewNewProduct>
      </ConteinerNewProduct>
    )
  }

  return (
    <Conteiner>

      {/* View for search product */}
      <ViewInput>
        <Input
          placeholderTextColor="#fff"
          placeholder="Escreva o nome do produto"
          value={filter}
          onChangeText={setFilter}
          textAlign="left"
        />

        <MaterialIcons
          name="search"
          color="#fff"
          size={30}
        />
      </ViewInput>

      <NotFaundText>{filter}</NotFaundText>

      {/* Component to render producers' products */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      {/* Component for add new product */}
      <NewProduct />

      {/* Conditional surrender if no product found */}
      {notFaund == true ?
        <ViewNotFaund>
          <NotFaundText>PRODUTO NÃO ENCONTRADO</NotFaundText>
        </ViewNotFaund>
        : null
      }

    </Conteiner>
  )
}

export default MyProducts
