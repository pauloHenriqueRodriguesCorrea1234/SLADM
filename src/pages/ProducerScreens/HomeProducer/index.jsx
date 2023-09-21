import { FlatList } from "react-native"

// Styled Components
import {
  Conteiner,
  ViewInput,
  Input,
  NotFaundText,
  ViewNotFaund,
} from "./styles"

// React States
import { useEffect, useState } from "react"

// products json
import { itens } from "../../../../data/itens.json"

// Components
import FruitCards from '../../../components/FruitCards'
import ExitApp from "../../../components/BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

const HomeProducer = () => {
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
      const filteredProducts = itens.filter((p) =>
        p.productName.toLowerCase().includes(filter.toLowerCase())
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
    return <FruitCards img={item.coverUrl} name={item.productName} />
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
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      {/* 
      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards name={item.productName} img={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )} */}
    </Conteiner>
  )
}

export default HomeProducer
