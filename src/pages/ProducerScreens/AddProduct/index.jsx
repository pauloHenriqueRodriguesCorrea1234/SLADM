import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { db } from "../../../services/firebaseAuthentication";

const AddProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const AddProduct = () => {
    if (!name || !price) {
      Alert.alert('Por favor, preencha o nome e o preço do produto.');
    } else {
      const product = {
        name,
        price: parseFloat(price),
      };

      db.ref('product').push(product)
        .then(() => {
          Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
          setName('');
          setPrice('');
        })
        .catch((error) => {
          Alert.alert('Erro', `Erro ao adicionar produto: ${error.message}`);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleMyProducts}>Adicione um novo produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
      />
      <View>
        <View>
          <Text style={styles.uploadImage}>Faça o Upload da imagem</Text>
          <TouchableOpacity>
            <Ionicons style={styles.addProduct} name="add" />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Preço do produto"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Adicionar produto" onPress={AddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D8900',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleMyProducts: {
    textAlign: "center",
    fontSize: 30,
    margin: 15,
  },
  addProduct: {
    fontSize: 35,
  },
  uploadImage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});

export default AddProductScreen;
