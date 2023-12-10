import styled from "styled-components/native"
import { Alert } from "react-native"

export const Conteiner = styled.SafeAreaView`
  flex: 1;
  background-color: #006400;
`

export const Input = styled.TextInput`
  text-align: center;
  border-color: #fff;
  border-width: 1px;
  height: 50px;
  margin: 10px;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
`

export const ViewProducer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
  background-color: #fff;
  border-radius: 30px;
  padding: 14px;
`

export const TextProducer = styled.Text`
  color: #fff;
  font-size: 18px;
`

export const TextCadastrar = styled.Text`
  color: #000;
  font-size: 18px;
`

export const AlertStyle = Alert

export const Switch = styled.Switch``
