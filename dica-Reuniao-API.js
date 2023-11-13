///////////////////////////////////
const { userEmail } = useContext(UserContext)
const [selectedProductId, setSelectedProductId] = useState("")
const [products, setProducts] = useState([])
const [price, setPrice] = useState(0)

useEffect(() => {
  ;(async () => {
    let response = await api.get("/products")
    const responseProducts = response.data

    response = await api.get(`/products/producer/${userEmail}`)
    const { products } = response.data
    const producerProducts = products
    // Talvez esse diff não dê certo
    const diffArray = responseProducts.filter(
      (p) => !producerProducts.includes(p)
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
///////////////////////////////////

;<select
  value={selectedProduct}
  onChange={(e) => setSelectedProductId(e.target.value)}
>
  {products.map((p) => (
    <option value={p._id}>{p.name}</option>
  ))}
</select>
