import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "../../services/firebaseAuthentication";

const database = getDatabase();

export default function App() {
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
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do produto"
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
        style={styles.input}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {product ? (
        <View style={styles.product}>
          <Text>{product.name}</Text>
          <Text>R${product.price}</Text>
          <Text>{product.description}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  product: {
    marginTop: 16,
  },
});
