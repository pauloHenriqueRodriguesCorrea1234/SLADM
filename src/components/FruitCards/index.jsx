import { Conteiner, Image, Text }from './styles'

// Componente FruitsCards recebe duas propriedades: 'name' e 'img'
const FruitCards = ({ name, img }) => {
  return (
    <Conteiner>
       {/* Renderiza uma imagem usando a URL fornecida na propriedade 'img' */}
      <Image  source={{ uri: img }} />
       {/* Renderiza o nome da fruta usando a propriedade 'name' */}
      <Text>{name}</Text>
    </Conteiner>
  );
};

export default FruitCards;
