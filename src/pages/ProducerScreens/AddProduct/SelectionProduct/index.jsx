import { useContext, useEffect, useState } from 'react'
import { Modal, FlatList, SafeAreaView } from 'react-native'
import { Touchable, Text, TouchableModal, ViewModal, TextModal, Title, ViewSelect, FlatListt } from './styles'

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
      const { products } = response.data
      const { data } = await api.get(`/products/producer/${userEmail}`)

      const producerProducts = data.products
      // Talvez esse diff não dê certo
      const diffArray = products.filter(
        (p) =>  !producerProducts.includes(p)
      )
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
          <ViewModal>
            <Title>
              Selecione seus Produtos
            </Title>
            <ViewModal>
              {/* Aqui entraria a renderização dos produtos não consegui usar o código do professor
                E quando não dá erro na renderização da no useContext e até agr não descobri */}
              <FlatListt>
                {/* Tentei mexer mas o estilo nao vem */}
              </FlatListt>
              <TouchableModal onPress={() => setVisible(false)}>
                <TextModal>Voltar</TextModal>
              </TouchableModal>
              <TouchableModal onPress={() => setVisible(false)}>
                <TextModal>Concluir</TextModal>
              </TouchableModal>
              {/* <TouchableModal>
                <Text>Voltar</Text>
              </TouchableModal> */}
            </ViewModal>

          </ViewModal>
        </SafeAreaView>
      </Modal>

    </Touchable>
  )
}