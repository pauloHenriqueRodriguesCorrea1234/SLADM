import { Container } from './styles';

import { useContext, useEffect, useState } from 'react';

import api from '../../../../services/api';
import { UserContext } from '../../../../context/UserContext';

export default SelectProduct = ({ options, onChange, initialSelect = [] }) => {

  const { userEmail } = useContext(UserContext);
  const [selectedProductById, setSelectedProductById] = useState('');
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    ; (async () => {
      let response = await api.get("/products");

      // Retorna todos os produtos que existem no banco de dados
      const { products } = response.data;
      const { data } = await api.get(`/products/producer/${userEmail}`);

      // Essa variável contém uma lista de todos o produtos que o determinado produtor comercializa 
      const producerProducts = data.products;

      // Esse essa variável faz uma comparação com todos os produtos  
      const diffArray = products.filter(
        (p) => !producerProducts.includes(p)
      );
      setProducts(diffArray);
    })();
  }, []);

  const addProduct = async () => {
    const response = await api.post(
      "/producers/add/product",
      {
        producerEmail: userEmail,
        productId: selectedProductById,
        price: price,
      },
      {
        validateStatus: (status) => status < 500,
      }
    );

    if (response.status === 201) {
      // sucesso
    } else {
      // deu ruim, tratar cada status
    }
  }

  return (
    <Container>

    </Container>
  )
}