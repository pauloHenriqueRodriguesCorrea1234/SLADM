import { ScrollView, StyleSheet, TouchableOpacity } from "react-native"

// products json
import { itens } from "../../../../data/itens.json"

import {
  Conteiner,
  ViewInput,
  Input,
  ViewNotFaund,
  NotFaundText,
} from "./style"

import { useEffect, useState } from "react"

// Components
import ExitApp from "../../../components/BackHandler"
import FruitCards from "../../../components/FruitCards"
import Icon from "react-native-vector-icons/MaterialIcons"

const MyProducts = () => {
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

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 20,
    color: "#000",
  },
  addProduct: {
    fontSize: 35,
  },
})

export default MyProducts
