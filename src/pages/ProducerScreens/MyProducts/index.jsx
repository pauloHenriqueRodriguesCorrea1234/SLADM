import { TextInput, View } from "react-native"

import Icons from 'react-native-vector-icons/MaterialIcons'

import { myProducts } from "../../../../data/myProducts.json"

// Styles Components
import { Conteiner, ViewInput, Input } from './styles'
import { useState } from "react"

const MyProducts = () => {

  const [filter, setFilter] = useState('')

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



    </Conteiner>
  )
}

export default MyProducts
