import styled from "styled-components/native"

export const Touchable = styled.TouchableOpacity`
  height: 50px;
  margin: 20px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border-color: #ccc;
  border-width: 1px;
  padding: 0 12px;
`

export const Title = styled.Text`
font-size: 25px;
color: white;
align-items: center;
justify-content: center;
`

export const ViewModal = styled.View`
  flex-direction: column;
  align-items: center;
  padding-bottom: 14%;
  background-color: #006400;
`

export const ViewSelect = styled.View`
width: 90%;
height: 5%;
background-color: white;
`

export const Text = styled.Text`
color: white;
font-size: 18px;
`

export const TouchableModal = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 1px;
  border-width: 1px;
  border-color: white;
  background-color: white;
`


export const TextModal = styled.Text`
  font-size: 20px;
  text-align: center;
`

export const FlatListt = styled.FlatList`
flex: 1;
background-color: aqua;
`
