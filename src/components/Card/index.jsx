import { Conteiner, Text, View, Touchable, ViewTouchable } from "./styles"

export default Card = ({ name, price, onPrees }) => {
  return (
    <Conteiner>
      <View>
        <Text> {name} </Text>
        <Text> {price} </Text>
      </View>

      <ViewTouchable>
        <Touchable onPress={onPrees}>
          <Text> Entrar em contato </Text>
        </Touchable>
      </ViewTouchable>
    </Conteiner>
  )
}
