import { TouchableOpacity } from "react-native"

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

// products json
import { itens } from "../../../data/itens.json"

// Components
import FruitCards from "../FruitCards"
import ExitApp from "../BackHandler"
import Icon from "react-native-vector-icons/MaterialIcons"

const Body = () => {
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

      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards name={item.productName} img={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Conteiner>
  )
}

export default Body
