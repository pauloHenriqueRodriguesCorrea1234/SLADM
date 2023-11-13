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
              <TouchableModal>
                <Text>Voltar</Text>
              </TouchableModal>
              <TouchableModal>
                <Text>Concluir</Text>
              </TouchableModal>
              <TouchableModal>
                <Text>Voltar</Text>
              </TouchableModal>
            </View>

          </View>
        </SafeAreaView>
      </Modal>

    </Touchable>
  )
}