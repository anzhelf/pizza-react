import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://64bae2425e0670a501d6b934.mockapi.io/items/` + id,
        );
        setPizza(data);
      } catch (err) {
        alert('Ошибка при получении пиццы c id: ' + id);
        console.log('Ошибка при получении пиццы c id: ' + id, err);
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) return <>'Загрузка...'</>;
  return (
    <div>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
