import styled from "styled-components/native"

export const Conteiner = styled.View`
  flex: 1;
  background-color: #006400;
`

export const ViewInput = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: #fff;
  align-items: center;
  justify-content: space-between;
  margin: 8px 10px;
  padding-right: 20px;
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  height: 50px;
  margin-left: 10px;
  color: #fff;
`

export const ViewNotFaund = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const NotFaundText = styled.Text`
  font-size: 20px;
  color: #fff;
`

export const List = styled.FlatList``

export const TouchableOpacityDetails = styled.TouchableOpacity``

export const TouchableOpacityNewProduct = styled.TouchableOpacity`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 30px;
`

export const FlatList = styled.FlatList``