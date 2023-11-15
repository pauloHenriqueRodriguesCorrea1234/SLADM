// Styles Components
import { Conteiner, Title, Touchable, TextCreateProduct, ViewAddProduct } from "./styles"
import SelectionProduct from "./SelectionProduct"

const AddProduct = () => {
  return (
    <Conteiner>

      <Title>Selecione os produtos que deseja vender</Title>

      {/*Seletor de produtos*/}
      <SelectionProduct />

      {/*Botão para criar um novo produto*/}
      <ViewAddProduct>
        <Touchable>
          <TextCreateProduct>
            Cadastrar Produto
          </TextCreateProduct>
        </Touchable>
      </ViewAddProduct>

    </Conteiner>
  )
}

export default AddProduct