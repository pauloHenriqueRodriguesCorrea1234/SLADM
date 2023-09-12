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
        <Touchable>
          <TextContact>

          </TextContact>
        </Touchable>
      </ViewContact>
    </Conteiner>
  )
}

export default Details;