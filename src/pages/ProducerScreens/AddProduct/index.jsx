// Styles Components
import { Conteiner, Input, Title, ViewCreateProduct, Touchable, ViewInput, TextCreateProduct } from "./styles"

const AddProduct = () => {
  return (
    <Conteiner>

      <Title>Informações do produto</Title>

      <ViewInput>
        <Input placeholder="Nome" autoCapitalize='words' placeholderTextColor="#FFF" />
        <Input placeholder="Insira a imagem" keyboardType="url" placeholderTextColor="#FFF" />
        <Input keyboardType="decimal-pad" placeholder="preço" placeholderTextColor="#FFF" />
      </ViewInput>

      <ViewCreateProduct>
        <Touchable>
          <TextCreateProduct>
            Cadastrar Produto
          </TextCreateProduct>
        </Touchable>
      </ViewCreateProduct>
    </Conteiner>
  )
}

export default AddProduct