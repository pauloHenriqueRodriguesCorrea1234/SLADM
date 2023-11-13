import { useState } from 'react'
import { Modal, FlatList, SafeAreaView } from 'react-native'
import { Touchable, Text, TouchableModal } from './styles'

import { AntDesign } from 'react-native-vector-icons'
import { View } from 'react-native'

export default SelectProduct = ({ options, onChange, initialSelect = [] }) => {
  const [visible, setVisible] = useState(false)
  return (
    <Touchable onPress={() => setVisible(true)}>
      <Text> Selecione o produto </Text>
      <Text> + </Text>

      <Modal onRequestClose={() => setVisible(false)} visible={visible} animationType={'slide'}>
        <SafeAreaView>
          <View>

            <View>
              <FlatList>
                {/* Aqui entraria a renderização dos produtos não consegui usar o código do professor
                E quando não dá erro na renderização da no useContext e até agr não descobri */}
              </FlatList>
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