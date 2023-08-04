import React, { useState } from "react";
import { Text, Button } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

import { Conteiner, Input, Product } from './styles'

const database = getDatabase();

export default function SearchBar() {
  const [product, setProduct] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const onSearchProduct = (productName) => {
    // Referência do nó que contém os produtos
    const productsRef = ref(database, "product");

    // Utiliza o método on para monitorar mudanças no nó dos produtos
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      // Busca pelo produto com o nome especificado
      const filteredProduct = Object.keys(data)
        .map((key) => ({ key, ...data[key] }))
        .find((p) => p.nome.toLowerCase() === productName.toLowerCase());

      setProduct(filteredProduct);
    });
  };

  const handleSearch = () => {
    onSearchProduct(searchValue);
  };

  return (
    <Conteiner>
      <Input
        placeholder="Digite o nome do produto"
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {product ? (
        <Product>
          <Text>{product.name}</Text>
          <Text>R${product.price}</Text>
          <Text>{product.description}</Text>
        </Product>
      ) : null}
    </Conteiner>
  );
}

