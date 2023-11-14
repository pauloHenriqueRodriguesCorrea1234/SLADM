import { useContext, useEffect, useState } from 'react'
import { Modal, FlatList, SafeAreaView } from 'react-native'
import { Touchable, Text, TouchableModal } from './styles'

import { View } from 'react-native'

import api from '../../../../services/api'
import { UserContext } from '../../../../context/UserContext'

export default SelectProduct = ({ options, onChange, initialSelect = [] }) => {

  const { userEmail } = useContext(UserContext);
  const [ selectedProductById, setSelectedProductById ] = useState('')
  const [ products, setProducts ] = useState([])
  const [price, setPrice] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    ; (async () => {
      let response = await api.get("/products")
      const responseProducts = response.data
      response = await api.get(`/products/producer/${userEmail}`)

      const { products } = responseProducts

      const producerProducts = products
      // Talvez esse diff não dê certo
      const diffArray = responseProducts.filter(
        (p) =>  !producerProducts.includes(p)
      )
      console.log(diffArray);
      setProducts(diffArray)
    })()
  }, [])

  const addProduct = async () => {
    const response = await api.post(
      "/producers/add/product",
      {
        producerEmail: userEmail,
        productId: selectedProductId,
        price,
      },
      {
        validateStatus: (status) => status < 500,
      }
    )

    if (response.status === 201) {
      // sucesso
    } else {
      // deu ruim, tratar cada status
    }
  }

  return (
    <Touchable onPress={() => setVisible(true)}>
      <Text> Selecione o produto </Text>
      <Text> + </Text>

      <Modal onRequestClose={() => setVisible(false)} visible={visible} animationType={'slide'}>
        <SafeAreaView>
          <View>
            <View>
              {/* Aqui entraria a renderização dos produtos não consegui usar o código do professor
                E quando não dá erro na renderização da no useContext e até agr não descobri */}
              <FlatList />
              <TouchableModal onPress={() => setVisible(false)}>
                <Text>Voltar</Text>
              </TouchableModal>
              <TouchableModal onPress={() => setVisible(false)}>
                <Text>Concluir</Text>
              </TouchableModal>
              {/* <TouchableModal>
                <Text>Voltar</Text>
              </TouchableModal> */}
            </View>

          </View>
        </SafeAreaView>
      </Modal>

    </Touchable>
  )
}