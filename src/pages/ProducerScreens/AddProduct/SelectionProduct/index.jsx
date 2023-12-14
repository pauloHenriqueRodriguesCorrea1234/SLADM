import { Container } from "./styles"

import { useContext, useEffect, useState } from "react"

import api from "../../../../services/api"
import { UserContext } from "../../../../context/UserContext"
import SelectMultiple from "react-native-select-multiple"
import { Text, View } from "react-native"

export default SelectProduct = ({ options, onChange, initialSelect = [] }) => {
  const { userEmail } = useContext(UserContext)
  const [selectedProductById, setSelectedProductById] = useState("")
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    ;(async () => {
      let response = await api.get("/products")

      // Retorna todos os produtos que existem no banco de dados
      const { products } = response.data
      setProducts(products)

      const { data } = await api.get(`/products/producer/${userEmail}`)

      // Essa variável contém uma lista de todos o produtos que o determinado produtor comercializa
      let producerProducts = data.products

      /**
       * O trecho abaixo foi colocado para se adaptar ao componente SelectMultiple
       */
      const allProductsToBeSelected = products.map((v) => { return { label: v.name, value: v } })
      setAllProducts(allProductsToBeSelected)
      producerProducts = producerProducts.map((v) => { return {label: v.name, value: v}})
      setSelectedProducts(producerProducts)
      /* Fim do trecho */
    })()
  }, [])

  const addProducts = async () => {
    for(let s in selectedProducts) {
      const { value } = s
      const response = await api.post(
        "/producers/add/product",
        {
          producerEmail: userEmail,
          productId: value._id,
          price: 0,
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

    const notSelectedProducts = selectedProducts.filter((s) => !products.includes(s.value))
    for(let n in notSelectedProducts) {
      try {
        await api.delete(`/producers/product/${n._id}`)
      } catch(err) {
        console.log(err)
      }
    }
  }

  const renderLabel = (label, style) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={style}>{label}</Text>
      </View>
    )
  }

  return (
    <Container>
      <SelectMultiple
        items={allProducts}
        selectedItems={selectedProducts}
        renderLabel={renderLabel}
        onSelectionsChange={setSelectedProducts} />
    </Container>
  )
}
