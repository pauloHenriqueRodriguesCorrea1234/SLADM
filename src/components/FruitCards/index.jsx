import { Conteiner, Image, Text } from './styles'

// Fruits Cards component receives two properties: 'name' and 'igm'
const FruitCards = ({ name, img }) => {
  return (
    <Conteiner>
      {/* Render an image using the URL provided in the 'img' property */}
      <Image source={{ uri: img }} />
      {/* Renders the name of the fruit using the 'name' property */}
      <Text>{name}</Text>
    </Conteiner>
  );
};

export default FruitCards;
