// Styles Components
import {
  Conteiner,
  Title,
  Touchable,
  TextCreateProduct,
  ViewAddProduct,
} from "./styles"

import api from "../../../services/api"

import SelectionProduct from "./SelectionProduct"

import { UserContext } from "../../../context/UserContext"
import { useContext, useState } from "react"

const AddProduct = () => {
  const [price, setPrice] = useState(0)
  const [product, setProduct] = useState(null)

  const { userEmail } = useContext(UserContext)

  const addProduct = async () => {
    const response = api.post(
      "/producers/add/product",
      {
        producerEmail: userEmail,
        productId: product._id,
        price: price,
      },
      { validateStatus: (status) => status < 500 }
    )

    if (response.status === 201) {
      // Deu certo!
    } else {
      // Deu ruim por algum motivo
    }
  }

  return (
    <Conteiner>
      <Title>Selecione os produtos que deseja vender</Title>

      {/*Seletor de produtos*/}
      <SelectionProduct />

      {/*Botão para criar um novo produto*/}
      <ViewAddProduct>
        <Touchable onPress={() => addProduct()}>
          <TextCreateProduct>Cadastrar Produto</TextCreateProduct>
        </Touchable>
      </ViewAddProduct>
    </Conteiner>
  )
}

export default AddProduct
