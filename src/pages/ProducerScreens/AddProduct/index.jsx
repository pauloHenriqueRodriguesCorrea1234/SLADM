// Styles Components
import { Conteiner, Title, Touchable, TextCreateProduct } from "./styles"
import SelectionProduct from "./SelectionProduct"

const AddProduct = () => {
  return (
    <Conteiner>

      <Title>Informações do produto</Title>

      {/*Seletor de produtos*/}
      <SelectionProduct />

      {/*Botão para criar um novo produto*/}
      <Touchable>
        <TextCreateProduct>
          Cadastrar Produto
        </TextCreateProduct>
      </Touchable>

    </Conteiner>
  )
}

export default AddProduct