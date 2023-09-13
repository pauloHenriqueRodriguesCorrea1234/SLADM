import { Conteiner, ViewDetails, Image, TextDetails, ViewContact, TextContact, Touchable } from './styles'

const Details = () => {
  return (
    <Conteiner>

      <ViewDetails>
        <Image />
        <TextDetails>Nome:  </TextDetails>
        <TextDetails>Preço: </TextDetails>
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
          </TextContact>
        </Touchable>
      </ViewContact>


    </Conteiner>
  )
}

export default Details;