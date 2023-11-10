import { useState } from 'react'
import { Modal, FlatList } from 'react-native'
import { Touchable, Text, ViewModal, TouchableModal } from './styles'

export default SelectProduct = ({options, onChange, initialSelect=[]}) => {
  const [visible, setVisible] = useState(false)
  return (
    <Touchable onPress={() => setVisible(true) }>
      <Text> Selecione o produto </Text>
      <Text> + </Text>

      <Modal onRequestClose={() => setVisible(false)} visible={visible} animationType={'slide'}>
        <ViewModal>
          <TouchableModal onPress={() => setVisible(false)}>
            <Text>Fecha</Text>
          </TouchableModal>
        </ViewModal>
      </Modal>

    </Touchable>
  )
}