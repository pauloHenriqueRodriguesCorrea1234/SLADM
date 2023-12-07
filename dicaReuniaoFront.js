import api from "./src/services/api"

// Na tela inicial do produtor
const [producerProducts, setProducerProducts] = useState([]);

const { userEmail } = useContext(UserContext);

useEffect(() => {
  ;(async () => {
    const response = await api.get(`/products/producer/${userEmail}`);
    const { products } = response.data;
    setProducerProducts(products);
  })();
}, []);

///////////////////////////////
// Agora, renderize os cards com os produtos do produtor! Uhulll!!!
