import { ScrollView, StyleSheet, TouchableOpacity } from "react-native"

// products json
import { itens } from "../../../../data/itens.json"

import { Conteiner, ViewInput, Input } from "./style"

import { useEffect, useState } from "react"

// Components
import ExitApp from "../../../components/BackHandler"
import FruitCards from "../../../components/FruitCards"

const MyProducts = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    setProducts(itens)
    ExitApp()
  }, [])

  useEffect(() => {
    if (filter.length > 0) {
      const filteredProducts = itens.filter((p) =>
        p.nomeProduto.toLowerCase().includes(filter.toLowerCase())
      )

      setProducts(filteredProducts)
    } else {
      setProducts(itens)
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
          textAlign="center"
        />
      </ViewInput>

      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity key={item.id}>
              <FruitCards name={item.nomeProduto} img={item.coverUrl} />
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
