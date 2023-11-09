// Styles Components
import { Conteiner, Title, Touchable, TextCreateProduct } from "./styles"

const AddProduct = () => {
  return (
    <Conteiner>

      <Title>Informações do produto</Title>

      {/*Seletor de produtos*/}


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