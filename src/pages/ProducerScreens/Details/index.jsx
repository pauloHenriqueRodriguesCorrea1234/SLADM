import { Conteiner, ViewDetails, Image, TextDetails, ViewContact, TextContact, Touchable, ButtonEdit, ButtonRemove, TextGestãoProduct, ButtonsGestProduct } from './styles'

const Details = () => {
  return (
    <Conteiner>

      <ViewDetails>
        <Image />
        <TextDetails>Nome:  </TextDetails>
        <TextDetails>Preço: </TextDetails>
        <TextDetails>Unidade de medida: </TextDetails>
        <TextDetails>Foto: </TextDetails>

        <ButtonsGestProduct>
          <ButtonEdit>
          <TextGestãoProduct>Editar </TextGestãoProduct>
        </ButtonEdit>
        <ButtonRemove>
          <TextGestãoProduct>Remover  </TextGestãoProduct>
        </ButtonRemove>
        </ButtonsGestProduct>
        
      </ViewDetails>

      <ViewContact>
        {/* Edit button */}
        <Touchable>
          <TextContact>
            Editar
          </TextContact>
        </Touchable>

        {/* Delete button */}
        <Touchable>
          <TextContact>
            Excluir
            Contato:
          </TextContact>
        </Touchable>
      </ViewContact>


    </Conteiner>
  )
}

export default Details;