import { Conteiner, Image, Text } from "./styles"

const FruitCards = ({ name, img }) => {
  return (
    <Conteiner>
      <Image source={{ uri: img }} />
      <Text>{name}</Text>
    </Conteiner>
  )
}

export default FruitCards
