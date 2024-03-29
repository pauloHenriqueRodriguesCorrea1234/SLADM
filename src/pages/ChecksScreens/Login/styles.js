import styled from "styled-components"
import { Alert } from "react-native"

export const Conteiner = styled.SafeAreaView`
  flex: 1;
  background-color: #b06c49;
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

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
  background-color: #fff;
  border-radius: 30px;
  padding: 14px;
`

export const TouchableWitOutStyle = styled.TouchableOpacity`
  align-items: center;
  margin-top: 11.5%;
  font-size: 20px;
  text-align: center;
  margin-bottom: 25px;
  height: 30px;
`
export const Text = styled.Text``

export const AlertStyle = Alert
