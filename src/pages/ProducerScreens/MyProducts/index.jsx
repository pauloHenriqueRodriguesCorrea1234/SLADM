import { FlatList } from "react-native"

import Icons from 'react-native-vector-icons/MaterialIcons'
import FruitCards from "../../../components/FruitCards"

import { myProducts } from '../../../../data/myProducts.json'
// Styles Components
import { Conteiner, ViewInput, Input } from './styles'
import { useState } from "react"

const MyProducts = () => {

  const [filter, setFilter] = useState('')


  function renderItem({ item }) {
    return <FruitCards name={item.nameProduct} />
  }
  return (
    <Conteiner>
      <ViewInput>
        <Input
          placeholderTextColor="#fff"
          placeholder="Escreva o nome do produto"
          value={filter}
          onChangeText={setFilter}
        />

        <Icons name="search" color="#fff" size={30} />
      </ViewInput>

      <FlatList
        data={myProducts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Conteiner>
  )
}

export default MyProducts
