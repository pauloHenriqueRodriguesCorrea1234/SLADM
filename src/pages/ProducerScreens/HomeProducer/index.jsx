import { ScrollView, TouchableOpacity, Text } from "react-native"

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
import FruitCards from "../../../components/FruitCards"
import ExitApp from "../../../components/BackHandler"

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
      // Verifica se existe algo que foi digitado existe no array de objeto
      const filteredProducts = itens.filter((p) =>
        p.nomeProduto.toLowerCase().includes(filter.toLowerCase())
      )

      // Se o que estiver dentro de filteredProducts
      if (filteredProducts.length == 0) {
        setNotFaund(true)
        setProducts(filteredProducts)
      } else {
        setProducts(itens)
        setNotFaund(false)
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
          textAlign="center"
        />
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
              <FruitCards name={item.nomeProduto} img={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Conteiner>
  )
}

export default HomeProducer
